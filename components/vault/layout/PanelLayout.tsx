'use client';

import { PanelGroup } from 'react-resizable-panels';
import PanelRenderer from './PanelRenderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { useRef, useState } from 'react';
import { PANEL_MIN_SIZE } from '@/constants/panel';

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
  const [collapsedState, setCollapsedState] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    const panel = refs.current[id];
    if (!panel) return;

    const willCollapse = !panel.isCollapsed();
    panel[willCollapse ? 'collapse' : 'expand']();
    setCollapsedState(prev => ({ ...prev, [id]: willCollapse }));
  };

  // Reset explorer to default size on mount
  // useEffect(() => {
  //   const explorer = panels.find(p => p.id === 'explorer');
  //   if (explorer?.defaultSize !== undefined) {
  //     const panelRef = refs.current['explorer'];
  //     if (panelRef && !panelRef.isCollapsed()) {
  //       // Use setTimeout to ensure layout is ready
  //       setTimeout(() => {
  //         panelRef.resize(explorer.defaultSize ?? PANEL_DEFAULT_SIZE);
  //       }, 0);
  //     }
  //   }
  // }, [panels]);

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
              {collapsedState[p.id] ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
              {collapsedState[p.id] ? 'Show' : 'Hide'} {p.title}
            </button>
          ))}

        <button
          onClick={() =>
            onAddPanel({
              title: 'New Panel',
              defaultSize: 30,
              minSize: PANEL_MIN_SIZE,
              content: <div className="p-4 text-center text-gray-500">Empty panel</div>,
            })
          }
          className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm"
        >
          + Add Panel
        </button>
      </div>

      <PanelGroup direction="horizontal" className="flex-1">
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