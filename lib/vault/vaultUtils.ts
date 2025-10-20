// import { Folder } from "@/types/explorer";

import { Folder } from "../supabase/types";

interface ItemCounts {
  folders: number;
  notes: number;
}

export function countItemsInFolder(folder: Folder): ItemCounts {
  let folderCount = 0;
  let noteCount = 0;

  for (const item of folder.children) {
    if (item.type === "folder") {
      folderCount++;
      const subCounts = countItemsInFolder(item as Folder);
      folderCount += subCounts.folders;
      noteCount += subCounts.notes;
    } else if (item.type === "note") {
      noteCount++;
    }
  }

  return { folders: folderCount, notes: noteCount };
}

export function countItemsInFolderToString(folder: Folder): string {
  const { folders, notes } = countItemsInFolder(folder);

  const folderText = folders === 1 ? "folder" : "folders";
  const noteText = notes === 1 ? "file" : "files";

  return `${notes} ${noteText}, ${folders} ${folderText}`;
}
