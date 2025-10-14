"use client";

import { cn } from "@/lib/utils";

import { X } from "lucide-react";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLTIP_GLOBAL_DELAY } from "@/constants/tooltip";
import IconButton from "@/components/IconButton";

interface TabProps {
  title?: string;
  isActive?: boolean;
}

const Tab = ({ title = "New Tab", isActive }: TabProps) => {
  const [isHovering, setIsHovering] = useState(false);
  // Tab history (the recent notes you've had open)

  const handleOnClick = () => {
    console.log("Close tab");
  };

  // Conditionally render an absolute as child div when inactive and hovering

  return (
    <TooltipProvider
      delayDuration={TOOLTIP_GLOBAL_DELAY}
      disableHoverableContent={true}
    >
      <Tooltip
        delayDuration={TOOLTIP_GLOBAL_DELAY}
        disableHoverableContent={true}
      >
        <TooltipTrigger asChild>
          <div
            className={cn(
              "group flex items-center justify-between rounded-t-md h-8 max-w-[200px] min-w-[40px] w-full pl-2 pr-1.5 text-sm relative overflow-ellipsis cursor-default select-none",
              {
                "bg-primary-gray-4 text-primary-text rounded-out-b-sm":
                  isActive,
                "text-primary-text-inactive": !isActive,
              }
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {isActive && (
              <div className="w-full overflow-hidden flex items-center justify-between">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
                  {title}
                </p>
                <IconButton
                  useTooltip
                  variation="smaller"
                  onClick={handleOnClick}
                  className="z-[15]"
                  tooltip="Close"
                  side="bottom"
                  delay={700}
                >
                  <X className="h-4 w-4" />
                </IconButton>
              </div>
            )}

            {!isActive && isHovering && (
              <div className="overflow-hidden flex items-center justify-between absolute pl-2 pr-1.5 -left-[1px] bottom-[3px] h-[28px] w-full z-[0] bg-primary-gray-button-hover-bg rounded-sm">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
                  {title}
                </p>
                <IconButton
                  useTooltip
                  variation="smaller"
                  onClick={handleOnClick}
                  className="z-[15]"
                  tooltip="Close"
                  side="bottom"
                  delay={700}
                >
                  <X className="h-4 w-4" />
                </IconButton>
              </div>
            )}

            {!isActive && !isHovering && (
              <div className="overflow-hidden flex items-center justify-between absolute pl-2 pr-1.5 -left-[1px] bottom-[3px] h-[28px] w-full z-[0] rounded-sm">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
                  {title}
                </p>
              </div>
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="z-[1000] font-bold"
          sideOffset={-3}
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Tab;
