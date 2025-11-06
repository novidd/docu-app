// src/utils/uuid.ts
export function uuid(): string {
  return crypto.randomUUID();
}