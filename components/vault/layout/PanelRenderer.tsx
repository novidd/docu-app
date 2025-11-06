import { Panel, PanelResizeHandle } from "react-resizable-panels";
import TabBar from "../tabs/TabBar";
import TabContent from "../tabs/TabContent";
import { ImperativePanelHandle } from "react-resizable-panels";
import { uuid } from "@/utils/uuid";

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
  return (
    <>
      <Panel
        id={panel.id}
        defaultSize={panel.defaultSize}
        minSize={panel.collapsible ? 0 : panel.minSize ?? 20}
        collapsible={panel.collapsible}
        ref={onRef}
        className="flex flex-col bg-gray-50 text-gray-900"
      >
        {panel.tabs ? (
          <>
            <TabBar
              tabs={panel.tabs}
              activeTabId={panel.activeTabId}
              onTabClick={(id) => onUpdate({ ...panel, activeTabId: id })}
              onCloseTab={(id) => {
                const filtered = panel.tabs.filter((t) => t.id !== id);
                const wasLast = filtered.length === 0;
                if (wasLast) {
                  const placeholderId = uuid();
                  onUpdate({
                    ...panel,
                    tabs: [
                      { id: placeholderId, title: "New Tab", content: "" },
                    ],
                    activeTabId: placeholderId,
                  });
                } else {
                  const newActive =
                    panel.activeTabId === id
                      ? filtered[0]?.id ?? null
                      : panel.activeTabId;
                  onUpdate({
                    ...panel,
                    tabs: filtered,
                    activeTabId: newActive,
                  });
                }
              }}
              onNewTab={() => {
                const placeholderId = uuid();
                onUpdate({
                  ...panel,
                  tabs: [
                    ...panel.tabs,
                    { id: placeholderId, title: "New Tab", content: "" },
                  ],
                  activeTabId: placeholderId,
                });
              }}
            />
            <TabContent
              tab={panel.tabs.find((t) => t.id === panel.activeTabId)}
              onChange={(content) => {
                onUpdate({
                  ...panel,
                  tabs: panel.tabs.map((t) =>
                    t.id === panel.activeTabId
                      ? { ...t, content, isUnsaved: true }
                      : t
                  ),
                });
              }}
              onCreateNote={() => {
                const newId = uuid();
                onUpdate({
                  ...panel,
                  tabs: panel.tabs.map((t) =>
                    // Only replace the *active* placeholder tab
                    t.id === panel.activeTabId &&
                    t.title === "New Tab" &&
                    t.content === ""
                      ? {
                          id: newId,
                          title: "New Note.md",
                          content: "# New note",
                          isUnsaved: true,
                        }
                      : t
                  ),
                  activeTabId: newId,
                });
              }}
            />
          </>
        ) : (
          <div className="flex-1 overflow-auto">{panel.content}</div>
        )}
      </Panel>

      {!isLast && (
        <PanelResizeHandle className="w-1 bg-gray-300 hover:bg-blue-500 transition-colors" />
      )}
    </>
  );
}
