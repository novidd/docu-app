import IconButton from "../IconButton";
import { ChevronDown, PanelRight } from "lucide-react";

const EditorTopToolbar = () => {
  return (
    <div className="h-10 flex gap-0.5 items-center justify-end pr-1.5 bg-primary-gray-2">
      <IconButton>
        <ChevronDown />
      </IconButton>
      <IconButton>
        <PanelRight />
      </IconButton>
    </div>
  );
};

export default EditorTopToolbar;
