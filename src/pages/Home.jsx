import StatBox from "../ui/StatBox";
import { BiPrinter } from "react-icons/bi";

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <StatBox title="خلاصه وضعیت تحصیلی" details>
            <div className="grid grid-cols-12 w-full gap-5">
              <div className="bg-gray-100 rounded-lg p-5 col-span-4">
                <div className="flex items-center justify-center flex-col gap-y-1">
                  <h2 className="text-5xl font-medium">98</h2>
                  <span className="">واحد برداشته شده</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-5 col-span-4">
                <div className="flex items-center justify-center flex-col gap-y-1">
                  <h2 className="text-5xl font-medium">87</h2>
                  <span className="">واحد پاس شده</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-5 col-span-4">
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
          <StatBox title="خلاصه وضعیت مالی" bulletColor="success" details>
            <ul className="flex flex-col gap-y-5">
              <li className="rounded-lg bg-gray-100 p-3 flex items-center justify-between">
                <h4 className="font-medium text-gray-500">
                  کل مبلغ پرداختی ترم جاری:
                </h4>
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">تومان</span>
                  <span className="font-medium">1/890/000</span>
                </div>
              </li>
              <li className="rounded-lg bg-gray-100 p-3 flex items-center justify-between">
                <h4 className="font-medium text-gray-500">مبلغ پرداخت شده:</h4>
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">تومان</span>
                  <span className="font-medium">770/000</span>
                </div>
              </li>
              <li className="rounded-lg bg-gray-100 p-3 flex items-center justify-between">
                <h4 className="font-medium text-gray-500">مبلغ بدهی:</h4>
                <div className="flex items-center gap-x-1">
                  <span className="text-sm">تومان</span>
                  <span className="font-medium">1/120/000</span>
                </div>
              </li>
            </ul>
          </StatBox>
        </div>
        <div className="col-span-2">
          <StatBox title="اطلاعات" bulletColor="neutral">
            <ul className="flex flex-col gap-y-5">
              <li className="rounded-lg bg-gray-100 p-3 flex items-center gap-x-2">
                <h4 className="font-medium text-gray-500">استان:</h4>
                <span className="font-medium">البرز</span>
              </li>
              <li className="rounded-lg bg-gray-100 p-3 flex items-center gap-x-1">
                <h4 className="font-medium text-gray-500">واحد:</h4>
                <span className="font-medium">کرج</span>
              </li>
              <li className="rounded-lg bg-gray-100 p-3 flex items-center gap-x-2">
                <h4 className="font-medium text-gray-500">نیمسال:</h4>
                <span className="font-medium">1402</span>
              </li>
            </ul>
          </StatBox>
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
