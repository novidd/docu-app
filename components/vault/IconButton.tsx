"use client";

import { cn } from "@/libs/utils";

type ButtonVariant = "default" | "small" | "smaller";

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variation?: ButtonVariant;
  label?: string;
  disabled?: boolean;
}

const IconButton = ({
  variation = "default",
  label,
  disabled,
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
      {children}
    </button>
  );
};

export default IconButton;
