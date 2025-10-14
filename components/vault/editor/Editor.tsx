import EditorBottomToolbar from "./EditorBottomToolbar";
import Tab from "./Tab";
import TabGroup from "./TabGroup";

const Editor = () => {
  return (
    <div className="h-10 w-full bg-primary-gray-2">
      <TabGroup>
        {/* If there is no note or anything else open, show a "New tab" */}
        <Tab isActive={true} title="Chapter 1 - With the Tilt of a Blade" />
        <Tab isActive={false} />
        <Tab isActive={false} />
      </TabGroup>

      {/* THIS BELOW IS THE ACTUAL TEXT EDITOR */}
      <EditorBottomToolbar />
      <div className="text-primary-text p-8 mt-2 w-full flex justify-center">
        <div className="flex flex-col max-w-[600px] w-full">
          <h1 className="text-3xl font-bold mb-4">
            Chapter 1 - With the Tilt of a Blade
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            posuere magna ligula, imperdiet feugiat nisi vehicula ac.
            Suspendisse tincidunt egestas nulla, porttitor malesuada leo
            pulvinar at. Maecenas ultricies vel nulla facilisis malesuada. In
            hac habitasse platea dictumst. Etiam quis ligula placerat, fringilla
            libero iaculis, bibendum lectus. Duis sagittis rhoncus tellus eget
            consequat. Vivamus faucibus lacinia sapien in finibus. Praesent
            varius laoreet tincidunt. Curabitur mattis, lacus nec sodales
            dapibus, enim nisi dictum felis, sit amet auctor dolor nulla vel
            nibh. Morbi fringilla nulla ante, in egestas dolor tincidunt id.
            Integer ac ornare orci. Pellentesque ut accumsan libero, et mollis
            neque. Etiam eu lectus nibh. Vivamus eget eleifend sem.
          </p>
          <p className="mb-4">
            Ut cursus non eros id vehicula. Donec consectetur interdum rhoncus.
            Phasellus quis porttitor ligula, vel ultricies turpis. Aenean
            sagittis dolor ut laoreet sodales. Nunc rutrum a ante sed dictum.
            Suspendisse eget porttitor massa, ac venenatis mi. Vestibulum vel
            lectus varius, semper sapien ac, sodales velit. Nulla facilisi.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Praesent orci ex, faucibus vitae aliquam
            at, mattis eget est. Integer sodales, nisi id condimentum
            consectetur, tortor est sollicitudin nisl, eget malesuada quam mi
            sed leo. Maecenas tristique elit sed diam efficitur, in ornare lorem
            mattis. Vestibulum bibendum nibh ac odio rutrum tincidunt.
          </p>
          <p className="mb-4">
            Proin in elementum mi, mattis tincidunt velit. Vestibulum euismod mi
            id nibh molestie, quis interdum enim sodales. Nam quis augue vitae
            neque imperdiet bibendum. Sed orci augue, placerat eget auctor a,
            blandit eget leo. Nam rutrum ornare purus, eget blandit nisl
            fringilla vitae. Aliquam sollicitudin vehicula nibh eget
            sollicitudin. Nunc feugiat laoreet justo a pulvinar. Praesent
            gravida, lacus at condimentum luctus, lacus mauris facilisis quam,
            pharetra pretium dui diam fringilla sapien. Maecenas nisl enim,
            iaculis non justo non, dictum sollicitudin purus. Ut eu libero
            tellus.
          </p>
          <p className="mb-4">
            Vivamus eget dolor felis. Morbi condimentum, turpis at facilisis
            gravida, sem risus tincidunt nisi, vel molestie diam est sed eros.
            Nunc id finibus felis. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Aliquam a vestibulum turpis. Sed non lectus dui.
            Suspendisse pellentesque orci sit amet nisi fermentum, ac
            pellentesque sem consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Editor;
