'use client';

import { Plus } from 'lucide-react';
import Tab from './Tab';

type TabType = {
  id: string;
  title: string;
  content: string;
  isUnsaved?: boolean;
};

type TabBarProps = {
  tabs: TabType[];
  activeTabId: string | null;
  onTabClick: (id: string) => void;
  onCloseTab: (id: string) => void;
  onNewTab: () => void;
};

export default function TabBar({
  tabs,
  activeTabId,
  onTabClick,
  onCloseTab,
  onNewTab,
}: TabBarProps) {
  const isOnlyPlaceholder =
    tabs.length === 1 && tabs[0].title === 'New Tab' && tabs[0].content === '';

  return (
    <div className="flex items-center bg-gray-100 border-b text-sm">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          title={tab.title}
          isActive={activeTabId === tab.id}
          isUnsaved={tab.isUnsaved}
          showClose={!(isOnlyPlaceholder && tab.id === tabs[0].id)}
          onClick={() => onTabClick(tab.id)}
          onClose={() => onCloseTab(tab.id)}
        />
      ))}

      <button
        onClick={onNewTab}
        className="px-2 py-1.5 text-gray-600 hover:bg-gray-200 transition-colors"
        aria-label="New tab"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}