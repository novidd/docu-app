import IconButton from "./IconButton";
import { Bookmark, FolderClosed, PanelLeft, Search } from "lucide-react";

const TopSideBar = () => {
  return (
    <div className="h-10 flex gap-2 items-center justify-start pl-2 bg-primary-gray-2">
      <IconButton>
        <PanelLeft className="h-5 w-5" />
      </IconButton>
      <IconButton className="ml-2">
        <FolderClosed className="h-5 w-5" />
      </IconButton>
      <IconButton>
        <Search className="h-5 w-5" />
      </IconButton>
      <IconButton>
        <Bookmark className="h-5 w-5" />
      </IconButton>
    </div>
  );
};

export default TopSideBar;
