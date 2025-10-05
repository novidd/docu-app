"use client";

import { cn } from "@/libs/utils";

import { X } from "lucide-react";

import IconButton from "../IconButton";
import { useState } from "react";

interface TabProps {
  label?: string;
  isActive?: boolean;
}

const Tab = ({ label = "New Tab", isActive }: TabProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleOnClick = () => {
    console.log("Close tab");
  };

  // Conditionally render an absolute as child div when inactive and hovering

  return (
    <div
      className={cn(
        "group flex items-center justify-between rounded-t-md h-8 max-w-[200px] min-w-[40px] w-full pl-2 pr-1.5 text-xs relative overflow-ellipsis cursor-default select-none",
        {
          "bg-primary-gray-4 text-primary-text rounded-out-b-sm": isActive,
          // "bg-primary-gray-2 text-primary-text-inactive hover:bg-primary-gray-button-hover-bg":
          //   !isActive,
          "text-primary-text-inactive": !isActive,
        }
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isActive && (
        <div className="w-full overflow-hidden flex items-center justify-between">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
            {label}
          </p>
          <IconButton
            variation="smaller"
            onClick={handleOnClick}
            className="z-[15]"
          >
            <X className="h-4 w-4" />
          </IconButton>
        </div>
      )}

      {!isActive && isHovering && (
        <div className="overflow-hidden flex items-center justify-between absolute pl-2 pr-1.5 -left-[1px] bottom-[3px] h-[28px] w-full z-[0] bg-primary-gray-button-hover-bg rounded-sm">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
            {label}
          </p>
          <IconButton
            variation="smaller"
            onClick={handleOnClick}
            className="z-[15]"
          >
            <X className="h-4 w-4" />
          </IconButton>
        </div>
      )}

      {!isActive && !isHovering && (
        <div className="overflow-hidden flex items-center justify-between absolute pl-2 pr-1.5 -left-[1px] bottom-[3px] h-[28px] w-full z-[0] rounded-sm">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap z-[10]">
            {label}
          </p>
        </div>
      )}

      {/* {!isActive && isHovering ? (
        <div className="absolute -left-0 -top-0 w-full h-full z-[0] bg-primary-gray-button-hover-bg rounded-xs" />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Tab;
