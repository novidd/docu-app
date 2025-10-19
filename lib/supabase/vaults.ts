import supabaseServerClient from "@/lib/supabase/server";
import { Folder, Note, Vault } from "./types";

const isValidUUID = (id: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

// Add React Query for best practices later
export async function getVaultById(vaultId: string): Promise<Vault> {
  const res = await supabaseServerClient();
  const { data, error } = await res
    .from("vaults")
    .select("*")
    .eq("id", vaultId)
    .single();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Vault does not exist!");

  // console.log(data);

  return data;
}

// ALSO ADD A "type" FIELD EITHER "folder or "note" FOR SIMPLER HANDLING IN THE FRONTEND

export async function getVaultContentsHierarchical(
  vaultId: string
): Promise<(Folder | Note)[]> {
  // Validate vaultId
  if (!vaultId || !isValidUUID(vaultId)) {
    throw new Error("Invalid vault ID");
  }

  const res = await supabaseServerClient();

  // Fetch folders using get_folder_tree RPC
  const { data: folders, error: folderError } = await res.rpc(
    "get_folder_tree",
    { vault_id: vaultId }
  );
  if (folderError) throw new Error(folderError.message);

  // Fetch all notes in the vault
  const { data: notes, error: noteError } = await res
    .from("notes")
    .select(
      "id, vault_id, folder_id, path, name, content, tags, metadata, created_at, updated_at"
    )
    .eq("vault_id", vaultId)
    .order("updated_at", { ascending: false });
  if (noteError) throw new Error(noteError.message);

  // Build the hierarchical structure
  const folderMap = new Map<string, Folder>();
  folders.forEach((folder: Folder) => {
    folderMap.set(folder.id, { ...folder, children: [] });
  });

  // Assign children (folders and notes)
  const rootItems: (Folder | Note)[] = [];

  // Add folders to their parent's children array or to rootItems
  folders.forEach((folder: { id: string; parent_id: string }) => {
    const folderWithChildren = folderMap.get(folder.id)!;
    if (folder.parent_id) {
      const parent = folderMap.get(folder.parent_id);
      if (parent) {
        parent.children!.push(folderWithChildren);
      }
    } else {
      rootItems.push(folderWithChildren);
    }
  });

  // Add notes to their folder's children array or to rootItems
  notes.forEach((note) => {
    if (note.folder_id) {
      const parent = folderMap.get(note.folder_id);
      if (parent) {
        parent.children!.push(note);
      }
    } else {
      rootItems.push(note);
    }
  });

  // Sort children by name for consistency
  folderMap.forEach((folder) => {
    folder.children!.sort((a, b) => a.name.localeCompare(b.name));
  });

  // Sort root items by name
  rootItems.sort((a, b) => a.name.localeCompare(b.name));

  return rootItems;
}

export async function getVaultContents(
  vaultId: string
): Promise<{ folders: Folder[]; notes: Note[] }> {
  // Validate vaultId
  if (!vaultId || !isValidUUID(vaultId)) {
    throw new Error("Invalid vault ID");
  }

  const res = await supabaseServerClient();

  // Fetch folders using the get_folder_tree RPC
  const { data: folders, error: folderError } = await res.rpc(
    "get_folder_tree",
    { vault_id: vaultId }
  );
  if (folderError) throw new Error(folderError.message);

  // Fetch all notes in the vault
  const { data: notes, error: noteError } = await res
    .from("notes")
    .select(
      "id, vault_id, folder_id, path, name, content, name, tags, metadata, created_at, updated_at"
    )
    .eq("vault_id", vaultId)
    .order("updated_at", { ascending: false });
  if (noteError) throw new Error(noteError.message);

  return {
    folders: folders || [],
    notes: notes || [],
  };
}

// export async function createVault(name: string): Promise<Vault> {
//   const res = await supabaseServerClient();
//   const { data, error } = await res
//     .from("vaults")
//     .insert({ name })
//     .select()
//     .single();
//   if (error) throw error;
//   return data;
// }

// export async function getVaults(): Promise<Vault[]> {
//   const res = await supabaseServerClient();
//   const { data, error } = await res
//     .from("vaults")
//     .select("*")
//     .order("created_at", { ascending: false });
//   if (error) throw error;
//   return data;
// }
