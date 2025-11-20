// src/contexts/PanelsContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { uuid } from '@/utils/uuid';
import { PanelConfig } from '@/components/vault/layout/PanelLayout';

type PanelsContextType = {
  panels: PanelConfig[];
  updatePanel: (id: string, updater: (panel: PanelConfig) => PanelConfig) => void;
  addTab: (panelId: string) => void;
  closeTab: (panelId: string, tabId: string) => void;
  createNoteFromPlaceholder: (panelId: string, placeholderTabId: string) => void;
};

const PanelsContext = createContext<PanelsContextType | null>(null);

export function PanelsProvider({
  children,
  panels,
  onPanelsChange,
}: {
  children: ReactNode;
  panels: PanelConfig[];
  onPanelsChange: (panels: PanelConfig[]) => void;
}) {
  const updatePanel = (id: string, updater: (panel: PanelConfig) => PanelConfig) => {
    const updatedPanels = panels.map(p => (p.id === id ? updater(p) : p));
    onPanelsChange(updatedPanels);
  };

  const addTab = (panelId: string) => {
    const placeholderId = uuid();
    updatePanel(panelId, p => ({
      ...p,
      tabs: [...(p.tabs || []), { id: placeholderId, title: 'New Tab', content: '' }],
      activeTabId: placeholderId,
    }));
  };

  const closeTab = (panelId: string, tabId: string) => {
    updatePanel(panelId, p => {
      if (!p.tabs) return p;
      const filtered = p.tabs.filter(t => t.id !== tabId);
      const wasLast = filtered.length === 0;
      if (wasLast) {
        const placeholderId = uuid();
        return {
          ...p,
          tabs: [{ id: placeholderId, title: 'New Tab', content: '' }],
          activeTabId: placeholderId,
        };
      }
      const newActive = p.activeTabId === tabId ? filtered[0]?.id ?? null : p.activeTabId;
      return { ...p, tabs: filtered, activeTabId: newActive };
    });
  };

  const createNoteFromPlaceholder = (panelId: string, placeholderTabId: string) => {
    const newId = uuid();
    updatePanel(panelId, p => ({
      ...p,
      tabs: p.tabs?.map(t =>
        t.id === placeholderTabId
          ? { id: newId, title: 'Untitled', content: '# New note', isUnsaved: true }
          : t
      ) || [],
      activeTabId: newId,
    }));
  };

  return (
    <PanelsContext.Provider value={{ panels, updatePanel, addTab, closeTab, createNoteFromPlaceholder }}>
      {children}
    </PanelsContext.Provider>
  );
}

export const usePanels = () => {
  const context = useContext(PanelsContext);
  if (!context) throw new Error('usePanels must be used within PanelsProvider');
  return context;
};