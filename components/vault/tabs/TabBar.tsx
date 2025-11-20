"use client";

import { ChevronDown, Plus } from "lucide-react";
import Tab from "./Tab";
import IconButton from "@/components/IconButton";
import { Separator } from "@radix-ui/react-separator";

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
    tabs.length === 1 && tabs[0].title === "New Tab" && tabs[0].content === "";

  return (
    <div className="flex items-center bg-primary-gray-2 text-sm h-[40px] gap-0 flex-shrink-0">
      {tabs.map((tab, i) => (
        <Tab
          key={tab.id}
          index={i}
          title={tab.title}
          isActive={activeTabId === tab.id}
          isUnsaved={tab.isUnsaved}
          showClose={!(isOnlyPlaceholder && tab.id === tabs[0].id)}
          onClick={() => onTabClick(tab.id)}
          onClose={() => onCloseTab(tab.id)}
        />
      ))}

      <div>
        <Separator
          orientation="vertical"
          className="bg-[#3F3F3F] mx-2"
          style={{
            width: "1px",
            height: "24px",
          }}
        />
      </div>

      <div className="h-full flex gap-1 justify-between w-full items-center sticky right-0 bg-primary-gray-2 z-[999] pr-2">
        <IconButton
          onClick={onNewTab}
          useTooltip
          variation="small"
          tooltip="New tab"
          side="bottom"
          delay={700}
        >
          <Plus />
        </IconButton>

        {/* Dropdown menu for tabs control */}
        <IconButton variation="small">
          <ChevronDown />
        </IconButton>
      </div>
    </div>
  );
}
