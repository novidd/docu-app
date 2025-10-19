import { Folder, Note } from "@/types/explorer";

export type VaultItem = Folder | Note;

export const staticVault: VaultItem[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    isOpen: true,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-10-01"),
    children: [
      {
        id: "1.1",
        name: "Work",
        type: "folder",
        isOpen: false,
        createdAt: new Date("2025-02-01"),
        updatedAt: new Date("2025-10-05"),
        children: [
          {
            id: "1.1.1",
            name: "Meeting Notes That I will not use",
            type: "note",
            createdAt: new Date("2025-03-01"),
            updatedAt: new Date("2025-10-10"),
            content: "Notes from team meeting on project planning.",
          },
          {
            id: "1.1.2",
            name: "Budget",
            type: "note",
            createdAt: new Date("2025-04-01"),
            updatedAt: new Date("2025-09-15"),
            content: "Annual budget breakdown for 2025.",
          },
        ],
      },
      {
        id: "1.2",
        name: "Personal",
        type: "folder",
        isOpen: true,
        createdAt: new Date("2025-01-15"),
        updatedAt: new Date("2025-10-12"),
        children: [
          {
            id: "1.2.1",
            name: "Todo List",
            type: "note",
            createdAt: new Date("2025-05-01"),
            updatedAt: new Date("2025-10-13"),
            content: "Grocery shopping, call mom, schedule dentist.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Empty folder That I will absolutely never ever use in my whole life",
    type: "folder",
    isOpen: false,
    createdAt: new Date("2025-01-01"),
    updatedAt: new Date("2025-10-01"),
    children: [],
  },
  {
    id: "2",
    name: "Quick Note",
    type: "note",
    createdAt: new Date("2025-06-01"),
    updatedAt: new Date("2025-10-14"),
    content: "Remember to update Next.js dependencies.",
  },
];