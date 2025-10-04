import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerTopToolbar from "./ExplorerTopToolbar";

const Explorer = () => {
  return (
    <div className="h-full">
      <ExplorerTopToolbar />
      <ExplorerBottomToolbar />
      {/* FOLDERS, NOTES, CANVAS ETC */}
    </div>
  );
};

export default Explorer;
