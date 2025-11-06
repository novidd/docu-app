import IconButton from "@/components/IconButton";
import { Bookmark, FolderClosed, Search } from "lucide-react";

const ExplorerTopToolbar = () => {
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
    </div>
  );
};

export default ExplorerTopToolbar;
