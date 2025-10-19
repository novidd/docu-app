import TextEditor from "./TextEditor";
import Tab from "./Tab";
import TabGroup from "./TabGroup";

const EditorGroup = () => {
  return (
    <div className="h-10 w-full bg-primary-gray-2">
      <TabGroup>
        {/* If there is no note or anything else open, show a "New tab" */}
        <Tab isActive={true} title="Chapter 1 - With the Tilt of a Blade" />
        <Tab isActive={false} />
        <Tab isActive={false} />
      </TabGroup>
      <TextEditor />
    </div>
  );
};

export default EditorGroup;
