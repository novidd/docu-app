import VaultClientWrapper from "./VaultClientWrapper";
import { staticVault } from "@/data/database";

import {
  getVaultById,
  getVaultContentsHierarchical,
} from "@/lib/supabase/vaults";

interface VaultPageProps {
  params: {
    vaultId: string;
  };
}

const VaultPage = async ({ params }: VaultPageProps) => {
  const { vaultId } = await params;

  const vault = await getVaultById(vaultId);

  const vaultContent = await getVaultContentsHierarchical(vaultId, true);
  // console.log(vaultContent)

  return (
    <VaultClientWrapper
      vault={vault}
      vaultContent={vaultContent}
      staticVault={staticVault}
    />
  );
};

export default VaultPage;
