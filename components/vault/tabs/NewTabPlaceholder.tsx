'use client';

export default function NewTabPlaceholder({ 
  onCreateNote 
}: { 
  onCreateNote: () => void 
}) {
  const actions = [
    {
      label: 'Create new note (Ctrl + N)',
      fn: onCreateNote,
    },
    { label: 'Go to file (Ctrl + O)', fn: () => alert('Go to file…') },
    { label: 'See recent files (Ctrl + O)', fn: () => alert('Recent files…') },
    { label: 'Close', fn: () => alert('Close panel…') },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
        {actions.map(({ label, fn }) => (
          <button
            key={label}
            onClick={fn}
            className="text-center py-2"
          >
            {label}
          </button>
        ))}
    </div>
  );
}