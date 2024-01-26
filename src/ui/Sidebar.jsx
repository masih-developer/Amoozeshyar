import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen overflow-y-auto bg-primary-darker text-white p-3">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
