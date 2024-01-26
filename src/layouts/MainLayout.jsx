import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Topbar from "../ui/Topbar";

const MainLayout = () => {
  return (
    <div className="container">
      <div className="flex">
        <Sidebar />
        <main className="w-[calc(100%-250px)] mr-auto bg-gray-100">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
