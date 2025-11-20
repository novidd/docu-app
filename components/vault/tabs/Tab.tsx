"use client";

import IconButton from "@/components/IconButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLTIP_GLOBAL_DELAY } from "@/constants/tooltip";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type TabProps = {
  title: string;
  index: number;
  isActive: boolean;
  isUnsaved?: boolean;
  showClose?: boolean;
  onClick: () => void;
  onClose: () => void;
};

export default function Tab({
  title,
  index,
  isActive,
  isUnsaved = false,
  showClose = true,
  onClick,
  onClose,
}: TabProps) {
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
              "group flex items-center justify-between h-full max-w-[200px] min-w-[40px] w-full pl-1 text-sm relative overflow-ellipsis cursor-default select-none",
              {
                "bg-primary-gray-4 text-primary-text rounded-out-b-sm z-[9999]":
                  isActive,
                "text-primary-text-inactive hover:bg-primary-gray-button-hover-bg": !isActive,
                "rounded-tr-md": index === 0,
                "rounded-t-md": index > 0,
              }
            )}
            onClick={onClick}
          >
            <div className="overflow-hidden flex items-center justify-between pl-1 pr-1.5 h-[28px] w-full z-[0] rounded-sm">
              <span className="flex items-center gap-1 select-none text-ellipsis overflow-hidden whitespace-nowrap z-[10]">
                <span className="text-xl mb-1">{isUnsaved && "• "}</span>
                {title}
              </span>
              {showClose && (
                <IconButton
                  useTooltip
                  variation="smaller"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                  }}
                  className="z-[15]"
                  tooltip="Close"
                  side="bottom"
                  delay={700}
                >
                  <X className="h-4 w-4" />
                </IconButton>
              )}
            </div>
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
}
