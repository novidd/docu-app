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

  const data = await getVaultById(vaultId);

  // const vaultContent = await getVaultContents(vaultId);
  // console.log(vaultContent);

  const vaultContent = await getVaultContentsHierarchical(vaultId);
  // console.log(vaultContent);

  for (const item of vaultContent) {
    console.log(item);
  }

  return <VaultClientWrapper vault={data} staticVault={staticVault} />;
};

export default VaultPage;
