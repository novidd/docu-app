import React from "react";

import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import TooltipIconButton from "@/components/TooltipIconButton";

const TabGroup = ({ children }: { children: React.ReactNode }) => {
  // Place each tab group in a new panel group, place a handle resizer at top

  // Stores tabs info here

  // const tabs = []
  // const tabsCount = tabs.length;

  return (
    <div className="w-full h-full flex items-end">
      <div className="w-full flex gap-1 pl-4">
        <div className="w-full flex gap-1 items-center relative">
          {children}
          <div className="h-full flex gap-1 justify-center items-center rounded-l-sm sticky right-0 mb-1 bg-primary-gray-2 z-[999]">
            <Separator
              orientation="vertical"
              className="bg-[#3F3F3F]"
              style={{
                height: "20px",
              }}
            />
            <TooltipIconButton variation="small" label="New tab" side="bottom" delay={700}>
              <Plus />
            </TooltipIconButton>
            {/* Dropdown menu for tabs control */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabGroup;
