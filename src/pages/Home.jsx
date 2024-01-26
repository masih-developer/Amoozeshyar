import StatBox from "../ui/StatBox";
import { BiPrinter } from "react-icons/bi";

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <StatBox title="خلاصه وضعیت تحصیلی" details>
            <div className="grid grid-cols-12 w-full gap-5">
              <div className="bg-gray-100 rounded-md p-5 col-span-4">
                <div className="flex items-center justify-center flex-col gap-y-1">
                  <h2 className="text-5xl font-medium">98</h2>
                  <span className="">واحد برداشته شده</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md p-5 col-span-4">
                <div className="flex items-center justify-center flex-col gap-y-1">
                  <h2 className="text-5xl font-medium">87</h2>
                  <span className="">واحد پاس شده</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md p-5 col-span-4">
                <div className="flex items-center justify-center flex-col gap-y-1">
                  <h2 className="text-5xl font-medium">18.5</h2>
                  <span className="">معدل تا کنون</span>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-x-2 mt-10 text-center mx-auto w-fit text-gray-500 border-b border-b-gray-500 pb-1">
              <BiPrinter className="text-lg" />
              چاپ کارنامه کلی دانشجو
            </button>
          </StatBox>
        </div>
        <div className="col-span-4">
          <StatBox
            title="خلاصه وضعیت مالی"
            bulletColor="success"
            details
          ></StatBox>
        </div>
        <div className="col-span-2">
          <StatBox title="اطلاعات" bulletColor="neutral"></StatBox>
        </div>
        <div className="col-span-9">
          <StatBox
            title="برنامه کلاسی ترم جاری"
            bulletColor="warning"
            details
          ></StatBox>
        </div>
        <div className="col-span-3">
          <StatBox title="اطلاعیه های مهم" bulletColor="error"></StatBox>
        </div>
      </div>
    </div>
  );
};

export default Home;
