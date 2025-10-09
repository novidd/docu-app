import TooltipIconButton from "@/components/TooltipIconButton";
import { Bookmark, FolderClosed, Search } from "lucide-react";

const ExplorerTopToolbar = () => {
  return (
    <div className="h-10 flex gap-1 items-center justify-start pl-1.5 bg-primary-gray-2">
      <TooltipIconButton label="Files" side="bottom">
        <FolderClosed />
      </TooltipIconButton>
      <TooltipIconButton label="Search" side="bottom">
        <Search />
      </TooltipIconButton>
      <TooltipIconButton label="Bookmark" side="bottom">
        <Bookmark />
      </TooltipIconButton>
    </div>
  );
};

export default ExplorerTopToolbar;
