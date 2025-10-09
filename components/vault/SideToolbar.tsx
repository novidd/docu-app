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

const SideToolbarLeft = () => {
  const {
    leftPanel: { isCollapsed, setPanelCollapsed },
  } = useVaultContext();

  return (
    <nav className="w-11 flex flex-col gap-2 justify-start items-center bg-primary-gray-3 border-r-1 border-primary-gray-2 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        <IconButton
          variation="small"
          useTooltip
          side="right"
          delay={300}
          activeStateTooltip="Expand"
          inactiveStateTooltip="Collapse"
          activeState={isCollapsed}
          onClick={() => setPanelCollapsed(!isCollapsed)}
          activeStateIcon={PanelLeftOpen}
          inactiveStateIcon={PanelLeftClose}
        />
      </section>
      <section className="w-full flex flex-col gap-2 px-2">
        <IconButton
          useTooltip
          tooltip="Open quick switcher"
          side="right"
          variation="small"
        >
          <FileSearch />
        </IconButton>
        <IconButton
          useTooltip
          tooltip="Open graph view"
          side="right"
          variation="small"
        >
          <GitFork />
        </IconButton>
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
        <IconButton
          variation="small"
          useTooltip
          side="left"
          delay={300}
          tooltip="Expand/Collapse Explorer"
          activeStateTooltip="Expand"
          inactiveStateTooltip="Collapse"
          activeState={isCollapsed}
          onClick={() => setPanelCollapsed(!isCollapsed)}
          activeStateIcon={PanelRightOpen}
          inactiveStateIcon={PanelRightClose}
        />
      </section>
      <section className="w-full flex flex-col gap-2 px-2" />
    </nav>
  );
};

export { SideToolbarRight, SideToolbarLeft };
