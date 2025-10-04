import IconButton from "../IconButton";
import { Bookmark, FolderClosed, Search } from "lucide-react";

const ExplorerTopToolbar = () => {
  return (
    <div className="h-10 flex gap-0.5 items-center justify-start pl-1.5 bg-primary-gray-2">
      <IconButton>
        <FolderClosed />
      </IconButton>
      <IconButton>
        <Search />
      </IconButton>
      <IconButton>
        <Bookmark />
      </IconButton>
    </div>
  );
};

export default ExplorerTopToolbar;
