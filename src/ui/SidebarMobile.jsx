import SidebarContent from './SidebarContent';
import { IoCloseOutline } from 'react-icons/io5';

const SidebarMobile = ({ isOpenSidebar, closeSidebar }) => {
  return (
    <div
      className={`w-[250px] z-50 overflow-y-auto bg-primary-darker text-white p-3 fixed right top-0 bottom-0 lg:hidden duration-300 ${
        isOpenSidebar ? 'right-0' : 'right-[-250px]'
      }`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex flex-col justify-center items-center gap-y-3 mr-auto ml-[30px]">
          <img src="/images/logo.png" alt="" className="max-w-[50px]" />
          <h3 className="text-lg">دانشگاه آزاد ایران</h3>
        </div>
        <button
          className="text-3xl transition-colors hover:text-primary hover:bg-white rounded-lg"
          onClick={closeSidebar}
        >
          <IoCloseOutline />
        </button>
      </div>
      <SidebarContent />
    </div>
  );
};

export default SidebarMobile;
