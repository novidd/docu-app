"use client";

import { PanelGroup, Panel, PanelResizer } from "@window-splitter/react";

import Explorer from "@/components/vault/explorer/Explorer";
import Editor from "@/components/vault/editor/Editor";

import { PANEL_MIN_PIXEL_SIZE } from "@/constants/panel";
import { useState } from "react";
import { cn } from "@/libs/utils";

const Page = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const onMouseDown = () => {
    setIsDragging(true);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  console.log(isDragging);

  return (
    <PanelGroup orientation="horizontal" className="min-h-screen w-full">
      {/* Make a custom panel resizer for custom cursor and stuff */}
      {/* MAKE A CUSTOM PANEL THAT ALWAYS INCLUDES A PANEL RESIZER AT THE END */}

      <Panel
        min={`${PANEL_MIN_PIXEL_SIZE}px`}
        default="300px"
        collapsible
        collapsedSize="0px"
      >
        <Explorer />
      </Panel>
      <PanelResizer
        size="1px"
        className="panel group relative"
        onDrag={onMouseDown}
        onDragEnd={onMouseUp}
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
      <Panel min={`${PANEL_MIN_PIXEL_SIZE}px`}>
        <Editor />
      </Panel>
    </PanelGroup>
  );
};

export default Page;
