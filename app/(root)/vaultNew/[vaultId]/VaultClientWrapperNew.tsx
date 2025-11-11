"use client";

import { PANEL_MIN_SIZE } from "@/constants/panel";
import { VaultItem } from "@/data/database";
import { Vault, VaultContent } from "@/lib/supabase/types";
import { useState } from "react";
import PanelLayout, {
  PanelConfig,
} from "@/components/vault/layout/PanelLayout";
import { PanelsProvider } from "@/context/PanelsContext";
import Explorer from "@/components/vault/explorer/Explorer";

interface VaultWrapperProps {
  vault: Vault;
  vaultContent: VaultContent;
  staticVault: VaultItem[];
}

const VaultClientWrapperNew = ({
  vault,
  vaultContent,
  staticVault,
}: VaultWrapperProps) => {
  // const {
  //   leftPanel: { isCollapsed, setPanelCollapsed },
  // } = useVaultContext();

  const [panels, setPanels] = useState<PanelConfig[]>([
    {
      id: "explorer",
      title: "Explorer",
      defaultSize: 15,
      minSize: PANEL_MIN_SIZE,
      collapsible: true,
      content: (
        <Explorer
          vault={vault}
          vaultContent={vaultContent}
          staticVault={staticVault}
        />
      ),
    },
    {
      id: "editor",
      title: "Editor",
      defaultSize: 78,
      minSize: PANEL_MIN_SIZE,
      tabs: [{ id: "note-1", title: "Untitled.md", content: "# Hello" }],
      activeTabId: "note-1",
    },
  ]);

  const addPanel = (panel: Omit<PanelConfig, "id">) => {
    const id = `panel-${Date.now()}`;
    setPanels((p) => [...p, { ...panel, id }]);
  };

  return (
    <PanelsProvider panels={panels} onPanelsChange={setPanels}>
      <PanelLayout
        panels={panels}
        onPanelsChange={setPanels}
        onAddPanel={addPanel}
        setPanels={setPanels}
      />
    </PanelsProvider>
  );
};

export default VaultClientWrapperNew;
