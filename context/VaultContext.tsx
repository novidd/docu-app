"use client";

import React, { createContext, ReactNode, useContext } from "react";

interface VaultProviderProps {
  children: ReactNode;
}

export const VaultProvider = ({ children }: VaultProviderProps) => {
  const [isLeftPanelCollapsed, setLeftPanelCollapsed] = React.useState(false);
  const [isRightPanelCollapsed, setRightPanelCollapsed] = React.useState(true);

  const toggleLeftPanelOpen = (isCollapsed: boolean) => {
    // console.log("leftpanel", isLeftPanelOpen)

    const shouldSetValue = true;

    if (shouldSetValue) {
      setLeftPanelCollapsed(isCollapsed);
    }
  };

  const toggleRightPanelOpen = (isCollapsed: boolean) => {
        const shouldSetValue = true;

    if (shouldSetValue) {
      setRightPanelCollapsed(isCollapsed);
    }
  };

  return (
    <VaultContext.Provider
      value={{
        leftPanel: {
          isCollapsed: isLeftPanelCollapsed,
          setPanelCollapsed: toggleLeftPanelOpen,
        },
        rightPanel: {
          isCollapsed: isRightPanelCollapsed,
          setPanelCollapsed: toggleRightPanelOpen,
        },
      }}
    >
      {children}
    </VaultContext.Provider>
  );
};

type PanelType = {
  isCollapsed: boolean;
  setPanelCollapsed: (isCollapsed: boolean) => void;
};

interface VaultContextType {
  rightPanel: PanelType;
  leftPanel: PanelType;
}

export const useVaultContext = () => {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error("useVault must be used within a VaultProvider");
  }
  return context;
};

const VaultContext = createContext<VaultContextType | undefined>(undefined);
