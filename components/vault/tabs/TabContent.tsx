import NewTabPlaceholder from './NewTabPlaceholder';

type Tab = { id: string; title: string; content: string; isUnsaved?: boolean };

type TabContentProps = {
  tab?: Tab;
  onChange: (content: string) => void;
  onCreateNote: () => void;
};

export default function TabContent({ tab, onChange, onCreateNote }: TabContentProps) {
  if (!tab) return null;

  const isPlaceholder = tab.title === 'New Tab' && tab.content === '';

  if (isPlaceholder) {
    return <NewTabPlaceholder onCreateNote={onCreateNote} />;
  }

  return (
    <textarea
      value={tab.content}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write here..."
      className="w-full h-full resize-none font-mono text-sm bg-transparent outline-none p-3"
    />
  );
}