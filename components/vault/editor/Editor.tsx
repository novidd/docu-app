import Tab from "./Tab";
import TabsContainer from "./TabsContainer";

const Editor = () => {
  return (
    <div className="h-10 w-full bg-primary-gray-2 pr-2">
      <TabsContainer>
        {/* If there is no note or anything else open, show a "New tab" */}
        <Tab isActive={true} label="Chapter 1 - With the Tilt of a Blade" />
        <Tab isActive={false} />
        <Tab isActive={false} />
      </TabsContainer>
    </div>
  );
};

export default Editor;
