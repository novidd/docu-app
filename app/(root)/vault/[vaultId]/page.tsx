"use client";

import Explorer from "@/components/vault/explorer/Explorer";
import Editor from "@/components/vault/editor/Editor";
import { PanelGroup, Panel } from "@window-splitter/react";

import PanelResizerCustom from "@/components/vault/window-splitter-custom/PanelResizerCustom";
import { PANEL_MIN_PIXEL_SIZE } from "@/constants/panel";

const Page = () => {
  return (
    <PanelGroup orientation="horizontal" className="min-h-screen w-full">
      {/* MAKE A CUSTOM PANEL THAT ALWAYS INCLUDES A PANEL RESIZER AT THE END */}

      <Panel
        min={`${PANEL_MIN_PIXEL_SIZE}px`}
        default="300px"
        collapsible
        collapsedSize="0px"
      >
        <Explorer />
      </Panel>
      <PanelResizerCustom />
      <Panel min={`${PANEL_MIN_PIXEL_SIZE}px`}>
        <Editor />
      </Panel>
    </PanelGroup>
  );
};

export default Page;
