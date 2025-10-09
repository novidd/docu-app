import React from "react";

import { ChevronDown, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import IconButton from "@/components/IconButton";

const TabGroup = ({ children }: { children: React.ReactNode }) => {
  // Place each tab group in a new panel group, place a handle resizer at top

  // Stores tabs info here

  // const tabs = []
  // const tabsCount = tabs.length;

  return (
    <div className="w-full h-full flex items-end">
      <div className="w-full flex gap-1 relative items-center pl-4">
        {children}
        <div className="h-full flex items-center">
          <Separator
            orientation="vertical"
            className="bg-[#3F3F3F] mb-1"
            style={{
              height: "20px",
            }}
          />
        </div>
        <div className="h-full flex gap-1 justify-between w-full items-center sticky right-0 mb-1 bg-primary-gray-2 z-[999] pr-2">
          <IconButton
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
    </div>
  );
};

export default TabGroup;
