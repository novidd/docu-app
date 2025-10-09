import IconButton from "@/components/IconButton";
import { Bookmark, FolderClosed, Search } from "lucide-react";

const ExplorerTopToolbar = () => {
  return (
    <div className="h-10 flex gap-1 items-center justify-start pl-1.5 bg-primary-gray-2">
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
  );
};

export default ExplorerTopToolbar;
