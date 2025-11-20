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
import { PanelConfig } from "./layout/PanelLayout";

const SideToolbarLeft = ({
  panels,
  toggle,
  collapsedState,
}: {
  panels: PanelConfig[];
  toggle: (id: string) => void;
  collapsedState: Record<string, boolean>;
}) => {
  return (
    <nav className="w-11 h-sc flex flex-col gap-2 justify-start items-center bg-primary-gray-3 rounded-xs overflow-hidden border-1 border-primary-border-1 z-[999]">
      <section className="h-10 w-full flex justify-center items-center bg-primary-gray-2">
        {panels
          .filter((p) => p.id === "explorer")
          .map((p) => (
            <IconButton
              key={p.id}
              variation="small"
              useTooltip
              side="right"
              delay={300}
              activeStateTooltip="Expand"
              inactiveStateTooltip="Collapse"
              activeState={collapsedState[p.id]}
              onClick={() => toggle(p.id)}
              activeStateIcon={PanelLeftOpen}
              inactiveStateIcon={PanelLeftClose}
            />
          ))}
      </section>
      <section className="w-full flex flex-col gap-2 items-center">
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
    <nav className="w-11 flex flex-col gap-2 justify-start items-center rounded-xs overflow-hidden border-1 border-primary-border-1 z-[999]">
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
