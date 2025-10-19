import { VaultItem } from "@/data/database";
import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerList from "./ExplorerList";
import ExplorerTopToolbar from "./ExplorerTopToolbar";
import { Vault } from "@/lib/supabase/types";

// Only notes are affected by sorting options
// Folders are always sorted by file name (A to Z)
// DEFAULT SORT: File name (A to Z)

interface ExplorerProps {
  staticVault: VaultItem[];
  vault: Vault;
}

const Explorer = ({ vault, staticVault }: ExplorerProps) => {
  // Get the vault's content here (folders, notes etc.)

  return (
    <div className="h-full bg-primary-gray-3 flex flex-col">
      <div className="h-full">
        <ExplorerTopToolbar vaultName={vault.name} />
        <ExplorerBottomToolbar />
        <ExplorerList vault={vault} items={staticVault} className="px-4 mt-2" />
      </div>
      <div className="py-3 px-4 flex justify-start border-t border-primary-gray-2">
        <p className="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden text-primary-text">
          {vault.name}
        </p>
      </div>
    </div>
  );
};

export default Explorer;
