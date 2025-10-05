import {
  SideToolbarLeft,
  SideToolbarRight,
} from "@/components/vault/SideToolbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col bg-primary-gray-4">
      <div className="flex min-h-screen min-w-screen ">
        <SideToolbarLeft />
        {children}
        <SideToolbarRight />
      </div>
    </div>
  );
};

export default Layout;
