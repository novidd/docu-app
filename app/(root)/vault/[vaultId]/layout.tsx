"use client";

import SideToolbar from "@/components/editor/SideToolbar";
import Explorer from "@/components/editor/explorer/Explorer";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PanelGroup direction="horizontal" className="min-h-screen">
      <div className="flex flex-col">
        <div className="flex min-h-screen min-w-screen ">
          <SideToolbar />
          <Panel minSize={10} defaultSize={15} className="bg-red-500">
            <Explorer />
          </Panel>
          <PanelResizeHandle className="bg-purple-500 w-[3px]" />
          <Panel>{children}</Panel>
        </div>
      </div>
    </PanelGroup>

      //     <PanelGroup direction="horizontal" className="min-h-60 text-black">
      //   <Panel defaultSize={25} minSize={10}>
      //     <div className="flex h-full items-center justify-center bg-pink-100">
      //       <span className="font-semibold">Sidebar</span>
      //     </div>
      //   </Panel>
      //   <PanelResizeHandle className="bg-red-500 w-[3px]" />
      //   <Panel defaultSize={25}>
      //     <div className="flex h-full items-center justify-center bg-pink-100">
      //       <span className="font-semibold">Content</span>
      //     </div>
      //   </Panel>
      // </PanelGroup>


    // <div className="flex flex-col">
    //   <div className="flex min-h-screen min-w-screen ">
    //     <SideToolbar />
    //     <Explorer />
    //     {children}
    //   </div>
    // </div>
  );
};

export default Layout;
