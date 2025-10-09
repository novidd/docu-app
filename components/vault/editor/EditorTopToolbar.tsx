import IconButton from "../../IconButton";
import { ChevronDown, PanelRight } from "lucide-react";

const EditorTopToolbar = () => {
  return (
    <div className="h-full flex gap-1 items-center justify-end bg-primary-gray-2 pb-1">
      <IconButton>
        <ChevronDown className="h-5 w-5" />
      </IconButton>
    </div>
  );
};

export default EditorTopToolbar;
