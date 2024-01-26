import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";

const MainLayout = () => {
  return (
    <div className="container">
      <div className="flex">
        <Sidebar />
        <main className="w-[calc(100%-250px)] mr-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
