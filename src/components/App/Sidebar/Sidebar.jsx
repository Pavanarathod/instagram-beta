const Sidebar = () => {
  return (
    <div className="flex items-center space-x-3 justify-between">
      <img
        src="/images/avatar.png"
        alt="person"
        className="rounded-full p-[2px] w-14 h-14"
      />
      <div>
        <h2 className="font-semibold">Pavan Rathod</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <span className="text-blue-500 text-sm">Sign out</span>
    </div>
  );
};

export default Sidebar;
