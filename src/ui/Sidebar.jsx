import SidebarContent from "./SidebarContent";

const Sidebar = () => {
  return (
    <div className="w-[250px] overflow-y-auto bg-primary-darker text-white p-3 fixed right-0 top-0 bottom-0">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
