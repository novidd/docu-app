import IconButton from "@/components/IconButton";
import { TOOLTIP_GLOBAL_SLOW_DELAY } from "@/constants/tooltip";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  EllipsisVertical,
} from "lucide-react";

const EditorBottomToolbar = () => {
  return (
    <div className="w-full flex justify-between items-center gap-2 text-primary-text-inactive text-xs mt-2 px-4">
      <div className="flex gap-0.5">
        <IconButton
          tooltip="Navigate back"
          side="bottom"
          useTooltip
          className="icon-button-small-icon"
          variation="smaller-wide"
          delay={TOOLTIP_GLOBAL_SLOW_DELAY}
        >
          <ArrowLeft />
        </IconButton>
        <IconButton
          tooltip="Navigate forward"
          side="bottom"
          useTooltip
          className="icon-button-small-icon"
          variation="smaller-wide"
          delay={TOOLTIP_GLOBAL_SLOW_DELAY}
          disabled
        >
          <ArrowRight />
        </IconButton>
      </div>
      <p className="text-ellipsis whitespace-nowrap overflow-hidden">
        Chapters / Chapter 1 - With the Tilt of a Blade
      </p>
      <div className="flex gap-0.5">
        <IconButton
          tooltip="Current view: editing <br/> Click to read <br/> Ctrl+Click to open to the right"
          side="bottom"
          useTooltip
          className="icon-button-small-icon"
          variation="smaller-wide"
          delay={TOOLTIP_GLOBAL_SLOW_DELAY}
        >
          <BookOpen />
        </IconButton>
        <IconButton
          tooltip="More options"
          side="bottom"
          useTooltip
          className="icon-button-small-icon"
          variation="smaller-wide"
          delay={TOOLTIP_GLOBAL_SLOW_DELAY}
        >
          <EllipsisVertical />
        </IconButton>
      </div>
    </div>
  );
};

export default EditorBottomToolbar;
