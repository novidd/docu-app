import { cn } from "@/libs/utils";
import React from "react";

const IconButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-8 pt-0.5 pb-0.75 rounded-sm flex justify-center items-center icon-button",
        className
      )}
    >
      {children}
    </div>
  );
};

export default IconButton;
