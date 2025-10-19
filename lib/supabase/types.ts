// lib/types.ts
export interface Vault {
  id: string;
  user_id: string;
  name: string;
  settings?: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface Folder {
  id: string;
  vault_id: string;
  name: string;
  path: string;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
  metadata?: Record<string, any>;
  depth?: number;
  children?: (Folder | Note)[];
}

export interface Note {
  id: string;
  vault_id: string;
  folder_id: string | null;
  path: string;
  name: string;
  content: string;
  tags?: string[];
  metadata?: Record<string, any>;
  created_at: string;
  updated_at: string;
}