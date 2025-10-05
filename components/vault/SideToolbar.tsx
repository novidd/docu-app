import { FileSearch, GitFork, PanelLeft, PanelRight } from "lucide-react";
import IconButton from "./IconButton";

const SideToolbarLeft = () => {
  return (
    <nav className="w-11 flex flex-col gap-2 justify-start items-center bg-primary-gray-3 border-r-1 border-primary-gray-2 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        <IconButton variation="small">
          <PanelLeft />
        </IconButton>
      </section>
      <section className="flex flex-col gap-2 px-2">
        <IconButton variation="small">
          <FileSearch />
        </IconButton>
        <IconButton variation="small">
          <GitFork />
        </IconButton>
      </section>
    </nav>
  );
};

const SideToolbarRight = () => {
  return (
    <nav className="w-11 flex flex-col gap-2 justify-start items-center border-l-1 border-primary-gray-2 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        <IconButton variation="small">
          <PanelRight />
        </IconButton>
      </section>
      <section className="flex flex-col gap-2 px-2"></section>
    </nav>
  );
};

export { SideToolbarRight, SideToolbarLeft };
