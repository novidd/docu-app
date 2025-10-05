import React from "react";

import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import IconButton from "../IconButton";

const TabsContainer = ({ children }: { children: React.ReactNode }) => {
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
            <IconButton variation="small" label="New tab">
              <Plus />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
