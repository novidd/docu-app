"use client";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Home = () => {
  return (
    <div>
      HOME
      {/* CREATE NEW VAULT */}
      {/* OPEN VAULT */}
      {/* MANAGE VAULTS */}
      {/* LIST OF ALL YOUR VAULTS 
        - Vault name
        - Last modified (Date + time)
        - Include node count
      */}
      <PanelGroup direction="horizontal" className="min-h-60 text-black">
        <Panel defaultSize={25} minSize={10}>
          <div className="flex h-full items-center justify-center bg-pink-100">
            <span className="font-semibold">Sidebar</span>
          </div>
        </Panel>
        <PanelResizeHandle className="bg-red-500 w-[3px]" />
        <Panel defaultSize={25}>
          <div className="flex h-full items-center justify-center bg-pink-100">
            <span className="font-semibold">Content</span>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
