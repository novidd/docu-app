import IconButton from "@/components/IconButton";
import { TOOLTIP_GLOBAL_SLOW_DELAY } from "@/constants/tooltip";
import {
  SquarePen,
  FolderPlus,
  ArrowUpNarrowWide,
  ChevronsDownUp,
  ChevronsUpDown,
} from "lucide-react";

const ExplorerBottomToolbar = () => {
  // Create an arrow of Button objects and define their properties, methods etc

  return (
    <div className="h-10 flex flex-row gap-0.5 w-full items-center justify-center">
      <IconButton
        variation="small"
        useTooltip
        tooltip="New note"
        side="bottom"
        delay={TOOLTIP_GLOBAL_SLOW_DELAY}
      >
        <SquarePen />
      </IconButton>
      <IconButton
        variation="small"
        useTooltip
        tooltip="New folder"
        side="bottom"
        delay={TOOLTIP_GLOBAL_SLOW_DELAY}
      >
        <FolderPlus />
      </IconButton>
      <IconButton
        variation="small"
        useTooltip
        tooltip="Change sort order"
        side="bottom"
        delay={TOOLTIP_GLOBAL_SLOW_DELAY}
      >
        <ArrowUpNarrowWide />
      </IconButton>
      <IconButton
        variation="small"
        useTooltip
        side="bottom"
        delay={TOOLTIP_GLOBAL_SLOW_DELAY}
        activeState={true}
        activeStateTooltip="Collapse all"
        inactiveStateTooltip="Expand all"
        activeStateIcon={ChevronsDownUp}
        inactiveStateIcon={ChevronsUpDown}
      >
        <ChevronsDownUp />
      </IconButton>
    </div>
  );
};

export default ExplorerBottomToolbar;
