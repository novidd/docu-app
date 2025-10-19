import IconButton from "@/components/IconButton";
import { Bookmark, FolderClosed, Search } from "lucide-react";

interface ExplorerTopToolbarProps {
  vaultName: string;
}

const ExplorerTopToolbar = ({ vaultName }: ExplorerTopToolbarProps) => {
  // Get all the users vaults in the component that will display here

  return (
    <div className="h-10 flex gap-1 items-center justify-between pl-1.5 pr-2 bg-primary-gray-2">
      <div className="flex gap-1 items-center justify-start">
        <IconButton tooltip="Files" side="bottom" useTooltip>
          <FolderClosed />
        </IconButton>
        <IconButton tooltip="Search" side="bottom" useTooltip>
          <Search />
        </IconButton>
        <IconButton tooltip="Bookmark" side="bottom" useTooltip>
          <Bookmark />
        </IconButton>
      </div>
      {/* <p className="text-xs font-bold text-ellipsis whitespace-nowrap overflow-hidden text-primary-text">
        {vaultName}
      </p> */}
    </div>
  );
};

export default ExplorerTopToolbar;
