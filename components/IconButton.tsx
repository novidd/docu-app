"use client";

import { cn } from "@/lib/utils";

import React, { useMemo } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { ButtonVariant, Side } from "@/types/button";
import { TOOLTIP_GLOBAL_DELAY } from "@/constants/tooltip";
import parse from 'html-react-parser';

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  "default": "h-7 w-8 icon-button-default",
  "small": "h-7 w-7 icon-button-small",
  "smaller": "h-6 w-6 rounded-xs icon-button-smaller",
  "smaller-wide": "h-6 w-7 rounded-[4px] icon-button-smaller"
};

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
  activeStateIcon?: React.ComponentType;
  inactiveStateIcon?: React.ComponentType;
}

const IconButton = ({
  variation = "default",
  disabled = false,
  activeState,
  activeStateIcon,
  inactiveStateIcon,
  useTooltip = false,
  tooltip,
  side,
  delay = TOOLTIP_GLOBAL_DELAY,
  activeStateTooltip,
  inactiveStateTooltip,
  className,
  children,
  ...props
}: IconButtonProps) => {
  if (activeState !== undefined && (!activeStateIcon || !inactiveStateIcon)) {
    console.error(
      "IconButton: Both activeStateIcon and inactiveStateIcon must be provided when activeState is defined."
    );
  }

  const button = useMemo(
    () => (
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
    ),
    [
      variation,
      disabled,
      activeState,
      activeStateIcon,
      inactiveStateIcon,
      className,
      children,
      props,
    ]
  );

  const tooltipContent =
    activeState !== undefined
      ? activeState
        ? activeStateTooltip
        : inactiveStateTooltip
      : tooltip;

  return useTooltip && tooltipContent ? (
    <Tooltip delayDuration={delay}>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side={side}
        className="z-[1000] font-bold text-center"
        sideOffset={-3}
      >
        {parse(tooltipContent)}
      </TooltipContent>
    </Tooltip>
  ) : (
    button
  );
};

const Button = React.memo(
  ({
    variation = "default",
    disabled = false,
    activeState,
    activeStateIcon: ActiveStateIcon,
    inactiveStateIcon: InactiveStateIcon,
    className,
    children,
    ...props
  }: IconButtonProps) => {

    return (
      <button
        className={cn(
          "min-w-5 max-w-10 py-1.5 rounded-sm flex justify-center items-center icon-button hover:bg-primary-gray-button-hover-bg transition-colors duration-100",
          className,
          VARIANT_STYLES[variation]
        )}
        disabled={disabled}
        {...props}
      >
        {activeState === undefined
          ? children
          : ActiveStateIcon &&
            InactiveStateIcon &&
            (activeState ? <ActiveStateIcon /> : <InactiveStateIcon />)}
      </button>
    );
  }
);

Button.displayName = "IconButton";

export default IconButton;
