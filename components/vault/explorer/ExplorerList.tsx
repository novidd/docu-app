"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Folder, Note } from "@/types/explorer";
import { VaultItem } from "@/data/database";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Icon from "@/components/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TOOLTIP_GLOBAL_SLOW_DELAY } from "@/constants/tooltip";

import parse from "html-react-parser";
import { countItemsInFolderToString } from "@/utils/vaultUtils";
import { Vault } from "@/lib/supabase/types";

interface ExplorerProps {
  items: VaultItem[];
  vault: Vault;
  className?: string;
}

interface FolderProps {
  folder: Folder;
}

interface NoteProps {
  note: Note;
}

interface ExplorerItemProps {
  item: Folder | Note;
  tooltip: string;
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

const ExplorerList = ({ vault, items, className }: ExplorerProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-0.5 mt-0.5 select-none ",
        className
      )}
    >
      {items.map((item) => (
        <div key={item.id}>
          {item.type === "folder" ? (
            <FolderItem folder={item as Folder} />
          ) : (
            <NoteItem note={item as Note} />
          )}
        </div>
      ))}
    </div>
  );
};

const ExplorerItem = ({
  item,
  isOpen,
  onClick,
  tooltip,
  className,
}: ExplorerItemProps) => {
  const chevron = isOpen ? ChevronDown : ChevronRight;

  return (
    <div className="relative">
      <TooltipProvider
        delayDuration={TOOLTIP_GLOBAL_SLOW_DELAY}
        disableHoverableContent={true}
      >
        <Tooltip
          delayDuration={TOOLTIP_GLOBAL_SLOW_DELAY}
          disableHoverableContent={true}
        >
          <TooltipTrigger asChild>
            <div className="w-full relative text-primary-text-brighter hover:text-primary-text">
              <div
                className={cn(
                  "flex items-center gap-1 w-full rounded-[4px] hover:bg-primary-gray-explorer-item h-[25px]",
                  className
                )}
                onClick={onClick}
              >
                {item.type === "folder" && (
                  <Icon
                    icon={chevron}
                    width={16}
                    height={16}
                    className="pl-1 icon-dark"
                  />
                )}
                <span className="block w-full text-xs pb-0.5 text-ellipsis whitespace-nowrap overflow-hidden pr-2">
                  {item.name}
                </span>
              </div>
            </div>
          </TooltipTrigger>
          {item.type === "folder" && isOpen && item.children.length > 0 && (
            <div className="pl-4">
              <ExplorerList items={item.children} />
            </div>
          )}
          <TooltipContent
            side="right"
            className="z-[1000] font-bold text-center"
            sideOffset={16}
            align="center"
          >
            {parse(tooltip)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {item.type === "folder" && isOpen && (
        <div className="absolute h-[calc(100%-28px)] w-[1px] top-[28px] left-3 bg-[#404040]" />
      )}
    </div>
  );
};

const NoteItem = ({ note }: NoteProps) => {
  const lastModified = format(note.updatedAt, "yyyy-MM-dd HH:mm");
  const createdAt = format(note.createdAt, "yyyy-MM-dd HH:mm");
  const tooltip = `Last modified ${lastModified} <br/> Created at ${createdAt}`;

  return <ExplorerItem item={note} tooltip={tooltip} className="pl-4" />;
};

const FolderItem = ({ folder }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltip = countItemsInFolderToString(folder);

  const handleOnClick = () => setIsOpen(!isOpen);

  // This is only for testing...
  useEffect(() => {
    setIsOpen(folder.isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExplorerItem
      item={folder}
      isOpen={isOpen}
      onClick={handleOnClick}
      tooltip={tooltip}
    />
  );
};

export default ExplorerList;
