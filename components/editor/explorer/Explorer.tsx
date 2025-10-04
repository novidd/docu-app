import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerTopToolbar from "./ExplorerTopToolbar";

const Explorer = () => {
  return (
    <div className="h-full bg-blue-200">
      <ExplorerTopToolbar />
      <ExplorerBottomToolbar />
      {/* FOLDERS, NOTES, CANVAS ETC */}
    </div>
  );
};

export default Explorer;
