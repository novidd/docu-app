"use client";

import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";
import React from "react";

type ButtonVariant = "default" | "small" | "smaller";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variation?: ButtonVariant;
  label?: string;
  disabled?: boolean;
  active?: boolean;
  activeIcon?: typeof Icon;
  inactiveIcon?: typeof Icon;
}

const IconButton = ({
  variation = "default",
  label,
  disabled,
  active,
  activeIcon,
  inactiveIcon,
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
      {active === undefined && children}
      {active !== undefined &&
        activeIcon &&
        inactiveIcon &&
        (active
          ? React.createElement(activeIcon)
          : React.createElement(inactiveIcon))}
    </button>
  );
};

export default IconButton;
