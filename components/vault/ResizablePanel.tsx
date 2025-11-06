import { Panel } from "@window-splitter/react";
import React from "react";
import PanelResizerCustom from "./window-splitter-custom/PanelResizerCustom";
import { PANEL_MIN_EXPLORER_SIZE } from "@/constants/panel";
import { useVaultContext } from "@/context/VaultContext";

const ResizablePanel = ({ children }: { children: React.ReactNode }) => {
  const {
    leftPanel: { isCollapsed, setPanelCollapsed },
  } = useVaultContext();

  return (
    <>
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
        {children}
      </Panel>
      <PanelResizerCustom />
    </>
  );
};

export default ResizablePanel;
