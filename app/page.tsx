"use client";

import PanelLayout, {
  PanelConfig,
} from "@/components/vault/layout/PanelLayout";
import { PANEL_MIN_SIZE } from "@/constants/panel";
import { PanelsProvider } from "@/context/PanelsContext";
import { useState } from "react";

export default function ObsidianPage() {
  const [panels, setPanels] = useState<PanelConfig[]>([
    {
      id: "explorer",
      title: "Explorer",
      defaultSize: 15,
      minSize: PANEL_MIN_SIZE,
      collapsible: true,
      content: (
        <ul className="space-y-1 text-sm p-3">
          {["Home.md", "Notes.md", "Tasks.md"].map((f) => (
            <li key={f} className="cursor-pointer hover:text-blue-600">
              {f}
            </li>
          ))}
        </ul>
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
      />
    </PanelsProvider>
  );
}
