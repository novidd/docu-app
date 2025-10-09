"use client";

import { cn } from "@/lib/utils";

import { Icon } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ButtonVariant, Side } from "@/types/button";
import { TOOLTIP_GLOBAL_DELAY } from "@/constants/tooltip";

interface TooltipProps {
  useTooltip?: boolean;
  tooltip?: string;
  side?: Side;
  delay?: number;
  activeStateTooltip?: string;
  inactiveStateTooltip?: string;
}

interface IconButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    TooltipProps {
  variation?: ButtonVariant;
  disabled?: boolean;
  activeState?: boolean;
  activeStateIcon?: typeof Icon;
  inactiveStateIcon?: typeof Icon;
}

const IconButton = ({
  variation = "default",
  disabled,
  activeState,
  activeStateIcon,
  inactiveStateIcon,
  useTooltip,
  tooltip,
  side,
  delay = TOOLTIP_GLOBAL_DELAY,
  activeStateTooltip,
  inactiveStateTooltip,
  className,
  children,
  ...props
}: IconButtonProps) => {
  const button = (
    <Button
      variation={variation}
      disabled={disabled}
      activeState={activeState}
      activeStateIcon={activeStateIcon}
      inactiveStateIcon={inactiveStateIcon}
      className={cn(className)}
      {...props}
    >
      {children}
    </Button>
  );

  return (
    <>
      {useTooltip ? (
        <TooltipProvider delayDuration={delay}>
          <Tooltip delayDuration={delay}>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent
              side={side}
              className="z-[1000] font-bold"
              sideOffset={-3}
            >
              {tooltip !== undefined &&
                (activeStateTooltip === undefined ||
                  inactiveStateTooltip === undefined) &&
                tooltip}
              {activeState ? activeStateTooltip : inactiveStateTooltip}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        button
      )}
    </>
  );
};

const Button = ({
  variation = "default",
  disabled,
  activeState,
  activeStateIcon,
  inactiveStateIcon,
  className,
  children,
  ...props
}: IconButtonProps) => {
  const variantStyles: Record<ButtonVariant, string> = {
    default: "h-7 w-8 icon-button-default",
    small: "h-7 w-7 icon-button-small",
    smaller: "h-5 w-5 rounded-xs icon-button-smaller",
  };

  return (
    <button
      className={cn(
        "min-w-5 max-w-10 py-1.5 rounded-sm flex justify-center items-center icon-button hover:bg-primary-gray-button-hover-bg transition-colors duration-100",
        className,
        variantStyles[variation]
      )}
      disabled={disabled}
      {...props}
    >
      {activeState === undefined && children}
      {activeState !== undefined &&
        activeStateIcon &&
        inactiveStateIcon &&
        (activeState
          ? React.createElement(activeStateIcon)
          : React.createElement(inactiveStateIcon))}
    </button>
  );
};

export default IconButton;
