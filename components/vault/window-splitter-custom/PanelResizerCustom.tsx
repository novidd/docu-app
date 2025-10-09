"use client";

import { cn } from "@/lib/utils";
import { PanelResizer } from "@window-splitter/react";
import { useState } from "react";

const PanelResizerCustom = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <PanelResizer
      size="1px"
      className="panel group relative"
      onDrag={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="absolute block w-full h-full bg-primary-gray-2" />
      <span
        className={cn(
          "absolute block h-full bg-transparent w-[3px] -left-[3px] transition-all",
          {
            "bg-purple-500 ": isDragging || isHovering,
          }
        )}
      />
    </PanelResizer>
  );
};

export default PanelResizerCustom;
