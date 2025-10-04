import { FileSearch, GitFork, PanelLeft } from "lucide-react";
import IconButton from "./IconButton";

const SideToolbar = () => {
  return (
    <nav className="max-w-11 flex flex-col gap-2 justify-start items-center bg-primary-gray-3 border-r-1 border-primary-gray-2">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        <IconButton className="w-[30px]">
          <PanelLeft />
        </IconButton>
      </section>
      <section className="flex flex-col gap-2 px-2">
        <IconButton className="w-[30px]">
          <FileSearch />
        </IconButton>
        <IconButton className="w-[30px]">
          <GitFork />
        </IconButton>
      </section>
    </nav>
  );
};

export default SideToolbar;
