import SideToolbar from "@/components/vault/SideToolbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen min-w-screen ">
        <SideToolbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
