import { RiArrowDownSLine } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";

const Topbar = () => {
  return (
    <nav className="flex items-center justify-between shadow-md py-3 px-7">
      <div className="flex items-center gap-x-3">
        <div className="w-11 h-11 rounded-lg overflow-hidden object-contain">
          <img src="/images/user.jpg" alt="" className="" />
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="sm">مسیح عابدینی</h5>
          <span className="text-xs">40119041852236</span>
        </div>
        <button className="bg-gray-100 text-xl p-[2px] text-gray-700 rounded-md">
          <RiArrowDownSLine />
        </button>
      </div>
      <div className="flex items-center gap-x-3">
        <div className="flex text-gray-700 items-center gap-x-2 bg-gray-100 p-2 rounded-lg text-sm">
          <IoCalendarOutline className="text-lg" />
          <span className="flex items-center gap-x-1">
            پنجشنبه <span>1402/11/05</span>
          </span>
        </div>
        <button
          className="text-gray-700 bg-gray-100 text-lg p-2 rounded-lg transition-colors hover:bg-primary/10 hover:text-primary relative before:absolute before:content-[attr(data-count)] before:-top-2 before:-right-2 before:w-5 before:h-5 before:rounded-full before:flex before:items-center before:justify-center before:bg-red-500 before:text-white before:text-[8px] before:border-2 before:border-white"
          data-count="10"
        >
          <IoMdNotificationsOutline />
        </button>
        <button className="text-gray-700 bg-gray-100 text-lg p-2 rounded-lg transition-colors hover:text-red-500 hover:bg-red-500/10">
          <RxExit />
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
