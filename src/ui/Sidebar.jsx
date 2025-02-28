import SidebarContent from './SidebarContent';

const Sidebar = () => {
  return (
    <div className="w-[250px] hidden overflow-y-auto bg-primary-darker text-white p-3 fixed top-0 bottom-0 right-0 lg:block">
      <div className="flex items-center justify-center gap-x-3 mb-5">
        <img src="/images/logo.png" alt="" className="max-w-[50px]" />
        <h3 className="text-xl">دانشگاه آزاد ایران</h3>
      </div>
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
