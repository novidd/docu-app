"use client";

import { PanelGroup, Panel } from "@window-splitter/react";
import PanelResizerCustom from "@/components/vault/window-splitter-custom/PanelResizerCustom";

import Explorer from "@/components/vault/explorer/Explorer";
import Editor from "@/components/vault/editor/Editor";
import {
  PANEL_MIN_EDITOR_SIZE,
  PANEL_MIN_EXPLORER_SIZE,
} from "@/constants/panel";
import { useVaultContext } from "@/context/VaultContext";
import { vault } from "@/data/database";

const VaultPage = () => {
  const {
    leftPanel: { isCollapsed, setPanelCollapsed },
  } = useVaultContext();

  return (
    <PanelGroup
      orientation="horizontal"
      className="min-h-screen w-full bg-primary-gray-4"
    >
      <Panel
        id="panel-explorer"
        min={`${PANEL_MIN_EXPLORER_SIZE}px`}
        default="300px"
        collapsible
        collapsedSize="0px"
        defaultCollapsed={isCollapsed}
        collapsed={isCollapsed}
        onCollapseChange={(isCollapsed) => setPanelCollapsed(isCollapsed)}
      >
        <Explorer vault={vault} />
      </Panel>
      <PanelResizerCustom />

      <Panel id="panel-editor-1" min={`${PANEL_MIN_EDITOR_SIZE}px`}>
        <Editor />
      </Panel>
      <PanelResizerCustom />
      <Panel id="panel-editor-2" min={`${PANEL_MIN_EDITOR_SIZE}px`}>
        <Editor />
      </Panel>
    </PanelGroup>
  );
};

export default VaultPage;
