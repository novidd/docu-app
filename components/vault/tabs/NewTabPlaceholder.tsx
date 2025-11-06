// src/components/tabs/NewTabPlaceholder.tsx
'use client';

export default function NewTabPlaceholder({ 
  onCreateNote 
}: { 
  onCreateNote: () => void 
}) {
  const actions = [
    {
      label: 'Create new note',
      fn: onCreateNote,
    },
    { label: 'Go to file', fn: () => alert('Go to file…') },
    { label: 'See recent files', fn: () => alert('Recent files…') },
    { label: 'Close panel', fn: () => alert('Close panel…') },
  ];

  return (
    <div className="p-8">
      <div className="max-w-sm mx-auto">
        {actions.map(({ label, fn }) => (
          <button
            key={label}
            onClick={fn}
            className="block w-full text-left px-4 py-3 mb-2 bg-white border rounded shadow hover:bg-gray-50 text-sm"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}