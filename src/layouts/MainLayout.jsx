import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import Topbar from '../ui/Topbar';
import { useState } from 'react';
import SidebarMobile from '../ui/SidebarMobile';

const MainLayout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const openSidebar = () => {
    document.body.classList.add('overflow-hidden');
    setIsOpenSidebar(true);
  };

  const closeSidebar = () => {
    document.body.classList.remove('overflow-hidden');
    setIsOpenSidebar(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <SidebarMobile
        isOpenSidebar={isOpenSidebar}
        closeSidebar={closeSidebar}
      />
      <main className="w-full lg:w-[calc(100%-250px)] lg:mr-auto bg-gray-100 min-h-screen">
        <Topbar openSidebar={openSidebar} />
        <Outlet />
      </main>
      <div
        className={`fixed inset-0 z-40 bg-black/50 duration-300 ${
          isOpenSidebar ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
};

export default MainLayout;
