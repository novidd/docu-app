"use client";

import { Panel, PanelResizeHandle } from "react-resizable-panels";
import TabBar from "../tabs/TabBar";
import TabContent from "../tabs/TabContent";
import { ImperativePanelHandle } from "react-resizable-panels";
import { usePanels } from "@/context/PanelsContext";
import { PANEL_MIN_SIZE } from "@/constants/panel";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PanelConfig = {
  id: string;
  title: string;
  defaultSize?: number;
  minSize?: number;
  collapsible?: boolean;
  tabs?: Array<{
    id: string;
    title: string;
    content: string;
    isUnsaved?: boolean;
  }>;
  activeTabId?: string | null;
  content?: React.ReactNode;
};

type PanelRendererProps = {
  panel: PanelConfig;
  onUpdate: (panel: PanelConfig) => void;
  onRef: (ref: ImperativePanelHandle | null) => void;
  isLast: boolean;
};

export default function PanelRenderer({
  panel,
  onUpdate,
  onRef,
  isLast,
}: PanelRendererProps) {
  const { addTab, closeTab, createNoteFromPlaceholder } = usePanels();

  const [resizeHandlePointDown, setResizeHandlePointDown] = useState(false);

  return (
    <>
      <Panel
        id={panel.id}
        defaultSize={panel.defaultSize}
        minSize={
          panel.collapsible ? PANEL_MIN_SIZE : panel.minSize ?? PANEL_MIN_SIZE
        }
        collapsible={panel.collapsible}
        ref={onRef}
        className="flex flex-col text-gray-200 rounded-xs overflow-hidden border-1 border-primary-border-1"
      >
        {panel.tabs ? (
          <>
            <TabBar
              tabs={panel.tabs}
              activeTabId={panel.activeTabId ?? null}
              onTabClick={(id) => onUpdate({ ...panel, activeTabId: id })}
              onCloseTab={(id) => closeTab(panel.id, id)}
              onNewTab={() => addTab(panel.id)}
            />
            <TabContent
              tab={panel.tabs.find((t) => t.id === panel.activeTabId)}
              onChange={(content) => {
                onUpdate({
                  ...panel,
                  tabs: panel.tabs?.map((t) =>
                    t.id === panel.activeTabId
                      ? { ...t, content, isUnsaved: true }
                      : t
                  ),
                });
              }}
              onCreateNote={() => {
                const activeTab = panel.tabs?.find(
                  (t) => t.id === panel.activeTabId
                );
                if (
                  activeTab?.title === "New Tab" &&
                  activeTab.content === ""
                ) {
                  createNoteFromPlaceholder(panel.id, activeTab.id);
                }
              }}
            />
          </>
        ) : (
          <div className="flex-1 overflow-auto bg-primary-gray-4">
            {panel.content}
          </div>
        )}
      </Panel>
      {!isLast && (
        <PanelResizeHandle
          onPointerDown={() => setResizeHandlePointDown(true)}
          onPointerUp={() => setResizeHandlePointDown(false)}
          className="w-[8px] flex flex-col items-center group"
        >
          {/* <div className="h-full w-[2px] bg-primary-gray-3 group-hover:bg-purple-600"></div> */}
          <div className={cn("h-full w-[2px] bg-primary-gray-3 group-hover:bg-purple-600", {
            "bg-purple-600": resizeHandlePointDown,
          })}></div>
        </PanelResizeHandle>
      )}
    </>
  );
}
