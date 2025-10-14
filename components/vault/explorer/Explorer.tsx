import { VaultItem } from "@/data/database";
import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerList from "./ExplorerList";
import ExplorerTopToolbar from "./ExplorerTopToolbar";

// Only notes are affected by sorting options
// Folders are always sorted by file name (A to Z)
// DEFAULT SORT: File name (A to Z)

interface ExplorerProps {
  vault: VaultItem[];
}

const Explorer = ({ vault }: ExplorerProps) => {
  return (
    <div className="h-full bg-primary-gray-3">
      <ExplorerTopToolbar />
      <ExplorerBottomToolbar />
      <ExplorerList items={vault} className="px-4 mt-2" />
    </div>
  );
};

export default Explorer;
