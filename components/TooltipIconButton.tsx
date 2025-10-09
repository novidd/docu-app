"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import IconButton, { IconButtonProps } from "./IconButton";
import { cn } from "@/lib/utils";
import { Side } from "@/types/types";
import { TOOLTIP_GLOBAL_DELAY } from "@/constants/tooltip";

interface TooltipIconButtonProps extends IconButtonProps {
  label: string;
  side: Side;
  delay?: number;
  activeLabel?: string;
  inactiveLabel?: string;
}

const TooltipIconButton = ({
  variation = "default",
  disabled,
  active,
  activeIcon,
  inactiveIcon,
  label,
  activeLabel,
  inactiveLabel,
  side,
  delay = TOOLTIP_GLOBAL_DELAY,
  className,
  children,
  ...props
}: TooltipIconButtonProps) => {
  return (
    <TooltipProvider delayDuration={delay} disableHoverableContent={true}>
      <Tooltip delayDuration={delay} disableHoverableContent={true}>
        <TooltipTrigger asChild>
          <IconButton
            variation={variation}
            className={cn(className)}
            active={active}
            activeIcon={activeIcon}
            inactiveIcon={inactiveIcon}
            disabled={disabled}
            {...props}
          >
            {children}
          </IconButton>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className="z-[1000] font-bold"
          sideOffset={-3}
        >
          {label !== undefined &&
            (activeLabel === undefined || inactiveLabel === undefined) &&
            label}
          {active ? activeLabel : inactiveLabel}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipIconButton;
