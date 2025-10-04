import { FileSearch, Network } from "lucide-react";
import IconButton from "./IconButton";

const Toolbar = () => {
  return (
    <nav className="min-w-12 py-2 px-2 flex flex-col gap-2 justify-start items-center bg-primary-gray-3 border-r-1 border-primary-gray-2">
      <IconButton>
        <FileSearch className="h-5 w-5" />
      </IconButton>
      <IconButton>
        <Network className="h-5 w-5 rotate-180" />
      </IconButton>
    </nav>
  );
};

export default Toolbar;
