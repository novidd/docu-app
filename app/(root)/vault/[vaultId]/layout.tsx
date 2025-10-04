import Toolbar from "@/components/editor/Toolbar";
import TopSideBar from "@/components/editor/TopSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <TopSideBar />
      <div className="flex min-h-screen min-w-screen ">
        <Toolbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
