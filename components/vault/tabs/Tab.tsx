'use client';

import { X } from 'lucide-react';

type TabProps = {
  title: string;
  isActive: boolean;
  isUnsaved?: boolean;
  showClose?: boolean;
  onClick: () => void;
  onClose: () => void;
};

export default function Tab({
  title,
  isActive,
  isUnsaved = false,
  showClose = true,
  onClick,
  onClose,
}: TabProps) {
  return (
    <div
      className={`flex items-center px-3 py-1.5 cursor-pointer border-r text-sm
        ${isActive ? 'bg-white font-medium' : 'hover:bg-gray-200'}`}
      onClick={onClick}
    >
      <span className="select-none">
        {title}
        {isUnsaved && ' •'}
      </span>

      {showClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="ml-2 text-gray-500 hover:text-red-600 transition-colors"
          aria-label="Close tab"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}