import { VaultItem } from "@/data/database";
import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerList from "./ExplorerList";
import ExplorerTopToolbar from "./ExplorerTopToolbar";
import { Vault, VaultContent } from "@/lib/supabase/types";
import IconButton from "@/components/IconButton";
import { CloudCheck, Loader } from "lucide-react";

// Only notes are affected by sorting options
// Folders are always sorted by file name (A to Z)
// DEFAULT SORT: File name (A to Z)

interface ExplorerProps {
  staticVault: VaultItem[];
  vault: Vault
  vaultContent: VaultContent;
}

const Explorer = ({ vault, vaultContent, staticVault }: ExplorerProps) => {
  const isLoading = false;
  const loadingTooltip = isLoading
    ? "Syncing with cloud..."
    : "All changes saved";

  return (
    <div className="h-full bg-primary-gray-3 flex flex-col">
      <div className="h-full">
        <ExplorerTopToolbar vaultName={vault.name} />
        <ExplorerBottomToolbar />
        <ExplorerList vaultContent={vaultContent} items={staticVault} className="px-4 mt-2" />
      </div>
      <div className="h-[48px] px-2.5 flex justify-between items-center border-t border-primary-gray-2">
        <p className="text-sm font-bold text-ellipsis whitespace-nowrap overflow-hidden text-primary-text">
          {vault.name}
        </p>
        <IconButton
          variation="smaller"
          useTooltip
          tooltip={loadingTooltip}
          side="right"
        >
          {isLoading ? (
            <Loader className="animate-spin h-4 w-4 text-primary-text" />
          ) : (
            <CloudCheck />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Explorer;
