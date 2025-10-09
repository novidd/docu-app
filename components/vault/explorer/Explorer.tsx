import ExplorerBottomToolbar from "./ExplorerBottomToolbar";
import ExplorerTopToolbar from "./ExplorerTopToolbar";

const Explorer = () => {
  return (
    <div className="h-full bg-primary-gray-3">
      <ExplorerTopToolbar />
      <ExplorerBottomToolbar />
      {/* <button onClick={() => onCollapseChange(!collapsed)}>asdsd</button> */}
      {/* FOLDERS, NOTES, CANVAS ETC */}
    </div>
  );
};

export default Explorer;
