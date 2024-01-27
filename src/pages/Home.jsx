import StatBox from "../ui/StatBox";
import { BiPrinter } from "react-icons/bi";
import Table from "../ui/Table";

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <StatBox title="خلاصه وضعیت تحصیلی" bulletColor="info" details>
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
        <div className="col-span-8">
          <StatBox title="برنامه کلاسی ترم جاری" bulletColor="warning" details>
            <div className="overflow-x-auto">
              <Table className="app-table">
                <Table.Header>
                  <Table.Row>
                    <th>ردیف</th>
                    <th>نام درس</th>
                    <th>نام استاد</th>
                    <th>زمان کلاس</th>
                    <th>تاریخ امتحان</th>
                    <th>کلاس</th>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <td>1</td>
                    <td>برنامه سازی پیشرفته</td>
                    <td>علیرضا نیکیان</td>
                    <td>سه شنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>2</td>
                    <td>ساختمان داده</td>
                    <td>حسین هادیپور</td>
                    <td>سه شنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>3</td>
                    <td>دانش خانواده و جمعیت</td>
                    <td>یوسف نجفی</td>
                    <td>دوشنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>3</td>
                    <td>دانش خانواده و جمعیت</td>
                    <td>یوسف نجفی</td>
                    <td>دوشنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>4</td>
                    <td>دانش خانواده و جمعیت</td>
                    <td>یوسف نجفی</td>
                    <td>دوشنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>5</td>
                    <td>دانش خانواده و جمعیت</td>
                    <td>یوسف نجفی</td>
                    <td>دوشنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                  <Table.Row>
                    <td>6</td>
                    <td>دانش خانواده و جمعیت</td>
                    <td>یوسف نجفی</td>
                    <td>دوشنبه 8:15 الی 10:30</td>
                    <td>
                      <div className="flex flex-col justify-center items-center gap-y-1">
                        <span className="">1402/06/12</span>
                        <span className="">ساعت 14:00</span>
                      </div>
                    </td>
                    <td>302 کامپیوتر</td>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </StatBox>
        </div>
        <div className="col-span-4">
          <StatBox title="اطلاعیه های مهم" bulletColor="error"></StatBox>
        </div>
      </div>
    </div>
  );
};

export default Home;
