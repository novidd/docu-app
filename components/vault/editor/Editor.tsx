import EditorTopToolbar from "./EditorTopToolbar";

const Editor = () => {
  return (
    <div className="h-full">
      <EditorTopToolbar />
      {/* If there is no note or anything else open, show a "New tab" */}
    </div>
  );
};

export default Editor;
