import { VaultProvider } from "@/context/VaultContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <VaultProvider>
      {children}
    </VaultProvider>
  );
};

export default Layout;
