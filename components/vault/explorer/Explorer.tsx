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
  vault: Vault;
  vaultContent: VaultContent;
}

const Explorer = ({ vault, vaultContent, staticVault }: ExplorerProps) => {
  const isLoading = false;
  const loadingTooltip = isLoading
    ? "Syncing with cloud..."
    : "All changes saved";

  return (
    <div className="h-full">
      <div className=" bg-primary-gray-3 w-full h-full flex flex-col justify-between">
        <div className="flex flex-col h-full w-full">
          <ExplorerTopToolbar />
          <ExplorerBottomToolbar />
          {isLoading ? (
            <div className="w-full h-1/2 rounded-md px-4 pb-4">
              <div className="w-full h-full rounded-md bg-primary-gray-4 skeleton" />
            </div>
          ) : (
            <ExplorerList
              vaultContent={vaultContent}
              items={staticVault}
              className="px-4"
            />
          )}
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
    </div>
  );
};

export default Explorer;
