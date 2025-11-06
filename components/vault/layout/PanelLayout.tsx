// src/components/layout/PanelLayout.tsx
'use client';

import { PanelGroup } from 'react-resizable-panels';
import PanelRenderer from './PanelRenderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { useRef } from 'react';

export type PanelConfig = {
  id: string;
  title: string;
  defaultSize?: number;
  minSize?: number;
  collapsible?: boolean;
  tabs?: Array<{ id: string; title: string; content: string; isUnsaved?: boolean }>;
  activeTabId?: string | null;
  content?: React.ReactNode;
};

type PanelLayoutProps = {
  panels: PanelConfig[];
  onPanelsChange: (panels: PanelConfig[]) => void;
  onAddPanel: (panel: Omit<PanelConfig, 'id'>) => void;
};

export default function PanelLayout({ panels, onPanelsChange, onAddPanel }: PanelLayoutProps) {
  const refs = useRef<Record<string, ImperativePanelHandle>>({});

  const toggle = (id: string) => {
    const r = refs.current[id];
    if (r) r.isCollapsed() ? r.expand() : r.collapse();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-gray-100">
      <div className="bg-gray-800 p-2 flex items-center gap-2 border-b border-gray-700">
        {panels
          .filter(p => p.collapsible)
          .map(p => (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm flex items-center gap-1"
            >
              {refs.current[p.id]?.isCollapsed() ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
              {refs.current[p.id]?.isCollapsed() ? 'Show' : 'Hide'} {p.title}
            </button>
          ))}

        <button
          onClick={() =>
            onAddPanel({
              title: 'New Panel',
              defaultSize: 30,
              content: <div className="p-4 text-center text-gray-500">Empty panel</div>,
            })
          }
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm"
        >
          + Add Panel
        </button>
      </div>

      <PanelGroup direction="horizontal" className="flex-1" autoSaveId="obsidian-layout">
        {panels.map((panel, i) => (
          <PanelRenderer
            key={panel.id}
            panel={panel}
            onUpdate={(updated) =>
              onPanelsChange(panels.map(p => (p.id === panel.id ? updated : p)))
            }
            onRef={(r) => r && (refs.current[panel.id] = r)}
            isLast={i === panels.length - 1}
          />
        ))}
      </PanelGroup>
    </div>
  );
}