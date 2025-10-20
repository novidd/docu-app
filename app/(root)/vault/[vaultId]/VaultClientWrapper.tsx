"use client";

import { PanelGroup, Panel } from "@window-splitter/react";
import PanelResizerCustom from "@/components/vault/window-splitter-custom/PanelResizerCustom";

import Explorer from "@/components/vault/explorer/Explorer";
import EditorGroup from "@/components/vault/editor/EditorGroup";
import {
  PANEL_MIN_EDITOR_SIZE,
  PANEL_MIN_EXPLORER_SIZE,
} from "@/constants/panel";
import { useVaultContext } from "@/context/VaultContext";
import { VaultItem } from "@/data/database";
import { Vault, VaultContent } from "@/lib/supabase/types";

interface VaultWrapperProps {
  vault: Vault;
  vaultContent: VaultContent;
  staticVault: VaultItem[];
}

const VaultClientWrapper = ({ vault, vaultContent, staticVault }: VaultWrapperProps) => {
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
        <Explorer vault={vault} vaultContent={vaultContent} staticVault={staticVault} />
      </Panel>
      <PanelResizerCustom />

      <Panel id="panel-editor-1" min={`${PANEL_MIN_EDITOR_SIZE}px`}>
        <EditorGroup />
      </Panel>
      <PanelResizerCustom />
      <Panel id="panel-editor-2" min={`${PANEL_MIN_EDITOR_SIZE}px`}>
        <EditorGroup />
      </Panel>
    </PanelGroup>
  );
};

export default VaultClientWrapper;
