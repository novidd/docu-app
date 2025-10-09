"use client";

import {
  FileSearch,
  GitFork,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import IconButton from "../IconButton";
import { useVaultContext } from "@/context/VaultContext";
import TooltipIconButton from "../TooltipIconButton";

const SideToolbarLeft = () => {
  const {
    leftPanel: { isCollapsed, setPanelCollapsed },
  } = useVaultContext();

  return (
    <nav className="w-11 flex flex-col gap-2 justify-start items-center bg-primary-gray-3 border-r-1 border-primary-gray-2 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        {/* <IconButton
          variation="small"
          onClick={() => setPanelCollapsed(!isCollapsed)}
          active={isCollapsed}
          activeIcon={PanelLeftOpen}
          inactiveIcon={PanelLeftClose}
        /> */}
        <TooltipIconButton
          label="Expand/Collapse Explorer"
          activeLabel="Expand"
          inactiveLabel="Collapse"
          active={isCollapsed}
          onClick={() => setPanelCollapsed(!isCollapsed)}
          activeIcon={PanelLeftOpen}
          inactiveIcon={PanelLeftClose}
          side="right"
          variation="small"
          delay={300}
        />
      </section>
      <section className="flex flex-col gap-2 px-2">
        <TooltipIconButton
          label="Open quick switcher"
          side="right"
          variation="small"
        >
          <FileSearch />
        </TooltipIconButton>
        <TooltipIconButton
          label="Open graph view"
          side="right"
          variation="small"
        >
          <GitFork />
        </TooltipIconButton>
      </section>
    </nav>
  );
};

const SideToolbarRight = () => {
  const {
    rightPanel: { isCollapsed, setPanelCollapsed },
  } = useVaultContext();

  return (
    <nav className="w-11 flex flex-col gap-2 justify-start items-center border-l-1 border-primary-gray-2 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        {/* <IconButton variation="small">
          <PanelRight />
        </IconButton> */}
        <IconButton
          variation="small"
          onClick={() => setPanelCollapsed(!isCollapsed)}
          active={isCollapsed}
          activeIcon={PanelRightOpen}
          inactiveIcon={PanelRightClose}
        />
      </section>
      <section className="flex flex-col gap-2 px-2"></section>
    </nav>
  );
};

export { SideToolbarRight, SideToolbarLeft };
