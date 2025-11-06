'use client';

import { Panel, PanelResizeHandle } from 'react-resizable-panels';
import TabBar from '../tabs/TabBar';
import TabContent from '../tabs/TabContent';
import { ImperativePanelHandle } from 'react-resizable-panels';
import { usePanels } from '@/context/PanelsContext';
import { PANEL_MIN_SIZE } from '@/constants/panel';

type PanelConfig = {
  id: string;
  title: string;
  defaultSize?: number;
  minSize?: number;
  collapsible?: boolean;
  tabs?: Array<{ id: string; title: string; content: string; isUnsaved?: boolean }>;
  activeTabId?: string | null;
  content?: React.ReactNode;
};

type PanelRendererProps = {
  panel: PanelConfig;
  onUpdate: (panel: PanelConfig) => void;
  onRef: (ref: ImperativePanelHandle | null) => void;
  isLast: boolean;
};

export default function PanelRenderer({ panel, onUpdate, onRef, isLast }: PanelRendererProps) {
  const { addTab, closeTab, createNoteFromPlaceholder } = usePanels();

  return (
    <>
      <Panel
        id={panel.id}
        defaultSize={panel.defaultSize}
        minSize={panel.collapsible ? PANEL_MIN_SIZE : panel.minSize ?? PANEL_MIN_SIZE}
        collapsible={panel.collapsible}
        ref={onRef}
        className="flex flex-col bg-gray-50 text-gray-900"
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
              tab={panel.tabs.find(t => t.id === panel.activeTabId)}
              onChange={(content) => {
                onUpdate({
                  ...panel,
                  tabs: panel.tabs?.map(t =>
                    t.id === panel.activeTabId 
                      ? { ...t, content, isUnsaved: true } 
                      : t
                  ),
                });
              }}
              onCreateNote={() => {
                const activeTab = panel.tabs?.find(t => t.id === panel.activeTabId);
                if (activeTab?.title === 'New Tab' && activeTab.content === '') {
                  createNoteFromPlaceholder(panel.id, activeTab.id);
                }
              }}
            />
          </>
        ) : (
          <div className="flex-1 overflow-auto">{panel.content}</div>
        )}
      </Panel>

      {!isLast && <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-500 transition-colors" />}
    </>
  );
}