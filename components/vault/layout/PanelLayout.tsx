// src/components/layout/PanelLayout.tsx
"use client";

import { PanelGroup } from "react-resizable-panels";
import PanelRenderer from "./PanelRenderer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { useRef, useState, useEffect } from "react";
import { PanelsProvider } from "@/context/PanelsContext";
import { SideToolbarLeft, SideToolbarRight } from "../SideToolbar";

export type PanelConfig = {
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

type PanelLayoutProps = {
  panels: PanelConfig[];
  onPanelsChange: (panels: PanelConfig[]) => void;
  onAddPanel: (panel: Omit<PanelConfig, "id">) => void;
  setPanels?: (panels: PanelConfig[]) => void;
};

export default function PanelLayout({
  panels,
  onPanelsChange,
  onAddPanel,
  setPanels,
}: PanelLayoutProps) {
  const refs = useRef<Record<string, ImperativePanelHandle>>({});
  const [collapsedState, setCollapsedState] = useState<Record<string, boolean>>(
    {}
  );

  const toggle = (id: string) => {
    const panel = refs.current[id];
    if (!panel) return;

    const willCollapse = !panel.isCollapsed();
    panel[willCollapse ? "collapse" : "expand"]();
    setCollapsedState((prev) => ({ ...prev, [id]: willCollapse }));
  };

  // Sync collapsed state on drag via polling
  useEffect(() => {
    const interval = setInterval(() => {
      Object.entries(refs.current).forEach(([id, panel]) => {
        if (panels.find((p) => p.id === id)?.collapsible) {
          const isCollapsed = panel.isCollapsed();
          setCollapsedState((prev) => {
            if (prev[id] !== isCollapsed) {
              return { ...prev, [id]: isCollapsed };
            }
            return prev;
          });
        }
      });
    }, 16);

    return () => clearInterval(interval);
  }, [panels]);

  return (
    <div className="flex flex-col bg-primary-gray-4 p-2 h-screen">
      <div className="flex gap-2 h-[100%]">
        <SideToolbarLeft
          panels={panels}
          toggle={toggle}
          collapsedState={collapsedState}
        />
        <PanelsProvider
          panels={panels}
          onPanelsChange={setPanels || onPanelsChange}
        >
          <div className="flex flex-col text-gray-100 w-full h-full">
            <PanelGroup direction="horizontal" className="flex-1 gap-1">
              {panels.map((panel, i) => (
                <PanelRenderer
                  key={panel.id}
                  panel={panel}
                  onUpdate={(updated) =>
                    onPanelsChange(
                      panels.map((p) => (p.id === panel.id ? updated : p))
                    )
                  }
                  onRef={(r) => r && (refs.current[panel.id] = r)}
                  isLast={i === panels.length - 1}
                />
              ))}
            </PanelGroup>
          </div>
        </PanelsProvider>
        <SideToolbarRight />
      </div>
    </div>
  );
}
