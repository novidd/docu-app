import {
  SideToolbarLeft,
  SideToolbarRight,
} from "@/components/vault/SideToolbar";
import { VaultProvider } from "@/context/VaultContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VaultProvider>
      <div className="flex flex-col bg-primary-gray-4">
        <div className="flex min-h-screen min-w-screen ">
          <SideToolbarLeft />
          {children}
          <SideToolbarRight />
        </div>
      </div>
    </VaultProvider>
  );
};

export default Layout;
