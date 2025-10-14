const items = [
  { id: 1, text: "Item 1", height: "h-16" },
  { id: 2, text: "Item 2", height: "h-24" },
  { id: 3, text: "Item 3", height: "h-20" },
];

const Home = () => {
  return (
    <div>
      HOME
      {/* CREATE NEW VAULT */}
      {/* OPEN VAULT */}
      {/* MANAGE VAULTS */}
      {/* LIST OF ALL YOUR VAULTS 
        - Vault name
        - Last modified (Date + time)
        - Include node count
      */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="relative w-96 mx-auto bg-gray-200 p-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`relative ${item.height} flex items-center px-4 group cursor-pointer`}
            >
              <span className="z-10">{item.text}</span>
              <div
                className="absolute inset-x-0 bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-0"
                style={{ height: "100%", top: 0 }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
