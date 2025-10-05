import { PanelGroup, Panel } from "@window-splitter/react";
import PanelResizerCustom from "@/components/vault/window-splitter-custom/PanelResizerCustom";

import Explorer from "@/components/vault/explorer/Explorer";
import Editor from "@/components/vault/editor/Editor";
import {
  PANEL_MIN_EDITOR_SIZE,
  PANEL_MIN_EXPLORER_SIZE,
} from "@/constants/panel";

const VaultPage = () => {
  // Get the vault data here

  return (
    <PanelGroup
      orientation="horizontal"
      className="min-h-screen w-full bg-primary-gray-4"
    >
      {/* MAKE A CUSTOM PANEL THAT ALWAYS INCLUDES A PANEL RESIZER AT THE END */}

      <Panel
        min={`${PANEL_MIN_EXPLORER_SIZE}px`}
        default="300px"
        collapsible
        collapsedSize="0px"
      >
        <Explorer />
      </Panel>
      <PanelResizerCustom />

      {/* START INSERT PANELS */}

      <Panel min={`${PANEL_MIN_EDITOR_SIZE}px`}>
        <Editor />
      </Panel>

      {/* END INSERT PANELS */}

      {/* LINKS LIST PANEL HERE, HIDDEN BY DEFAULT */}
    </PanelGroup>
  );
};

export default VaultPage;
