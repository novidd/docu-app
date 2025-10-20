import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Folder, Note } from "./supabase/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function logVaultHierarchy(
  items: (Folder | Note)[],
  depth: number = 0,
  prefix: string = ""
): void {
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const isFolder = item.type === "folder";
    const isOpen = isFolder && (item as Folder).is_open;

    // Create indentation and connector
    const indent = prefix + (isLast ? "└── " : "├── ");
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    // Log current item
    console.log(
      `${indent}${isFolder ? "📁" : "📝"} ${item.name} ${
        isFolder ? `(isOpen: ${isOpen})` : ""
      }`
    );

    // Log children if folder
    if (isFolder && item.children && item.children.length > 0) {
      logVaultHierarchy(
        item.children as (Folder | Note)[],
        depth + 1,
        childPrefix
      );
    }
  });
}
