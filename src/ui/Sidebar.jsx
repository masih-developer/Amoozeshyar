import { RxDashboard } from "react-icons/rx";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { NavLink } from "react-router-dom";
import { PiStudentDuotone } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen overflow-y-auto bg-primary-darker text-white p-3">
      <div className="flex items-center justify-center gap-x-3 mb-5">
        <img src="/logo.png" alt="" className="max-w-[50px]" />
        <h3 className="text-xl">دانشگاه آزاد ایران</h3>
      </div>
      <Accordion
        className="flex flex-col gap-y-3"
        transition
        transitionTimeout={500}
      >
        <AccordionItem
          buttonProps={{
            className: "w-full",
          }}
          header={
            <NavLink className="sidebar-acc__item">
              <RxDashboard className="text-lg" />
              داشبورد دانشجو
            </NavLink>
          }
          panelProps={{ className: "bg-red-500" }}
        ></AccordionItem>
        <AccordionItem
          buttonProps={{
            className: ({ isEnter }) =>
              `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
                isEnter ? " bg-white text-primary-darker" : ""
              }`,
          }}
          header={({ state: { isEnter } }) => (
            <>
              <div className="flex items-center gap-x-2">
                <PiStudentDuotone className="text-lg" />
                ثبت نام دروس دانشجو
              </div>
              <RiArrowDownSLine
                className={`text-xl transition-transform${
                  isEnter ? " rotate-180" : ""
                }`}
              />
            </>
          )}
          contentProps={{
            style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
          }}
        >
          <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
            <li>
              <NavLink className="navlink__item navlink__item--active">
                انتخاب واحد
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">حذف و اضافه</NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">حذف اضطراری</NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">آخرین وضعیت ترم جاری</NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">
                مدیریت مالی نیمسال تحصیلی
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">مدیریت پرداخت ها</NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">
                ارسال درخواست اعتراض به نمره
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">مشاهده کارنامه</NavLink>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          buttonProps={{
            className: ({ isEnter }) =>
              `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
                isEnter ? " bg-white text-primary-darker" : ""
              }`,
          }}
          header={({ state: { isEnter } }) => (
            <>
              <div className="flex items-center gap-x-2">
                <PiStudentDuotone className="text-lg" />
                صندوق رفاه دانشجویی
              </div>
              <RiArrowDownSLine
                className={`text-xl transition-transform${
                  isEnter ? " rotate-180" : ""
                }`}
              />
            </>
          )}
          contentProps={{
            style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
          }}
        >
          <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
            <li>
              <NavLink className="navlink__item">
                درخواست / پیگیری تسهیلات
              </NavLink>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          buttonProps={{
            className: ({ isEnter }) =>
              `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
                isEnter ? " bg-white text-primary-darker" : ""
              }`,
          }}
          header={({ state: { isEnter } }) => (
            <>
              <div className="flex items-center gap-x-2">
                <PiStudentDuotone className="text-lg" />
                درخواست / مجوز
              </div>
              <RiArrowDownSLine
                className={`text-xl transition-transform${
                  isEnter ? " rotate-180" : ""
                }`}
              />
            </>
          )}
          contentProps={{
            style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
          }}
        >
          <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
            <li>
              <NavLink className="navlink__item">
                ارسال / پیگیری درخواست دانشجو
              </NavLink>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          buttonProps={{
            className: ({ isEnter }) =>
              `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
                isEnter ? " bg-white text-primary-darker" : ""
              }`,
          }}
          header={({ state: { isEnter } }) => (
            <>
              <div className="flex items-center gap-x-2">
                <PiStudentDuotone className="text-lg" />
                ارزشیابی استاد
              </div>
              <RiArrowDownSLine
                className={`text-xl transition-transform${
                  isEnter ? " rotate-180" : ""
                }`}
              />
            </>
          )}
          contentProps={{
            style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
          }}
        >
          <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
            <li>
              <NavLink className="navlink__item">
                ارزشیابی استاد در نیمسال جاری
              </NavLink>
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          buttonProps={{
            className: ({ isEnter }) =>
              `flex items-center justify-between hover:bg-white hover:text-primary-darker transition-colors p-2 rounded-lg w-full${
                isEnter ? " bg-white text-primary-darker" : ""
              }`,
          }}
          header={({ state: { isEnter } }) => (
            <>
              <div className="flex items-center gap-x-2">
                <PiStudentDuotone className="text-lg" />
                مدیریت امور خوابگاه ها
              </div>
              <RiArrowDownSLine
                className={`text-xl transition-transform${
                  isEnter ? " rotate-180" : ""
                }`}
              />
            </>
          )}
          contentProps={{
            style: { transition: "height 0.25s cubic-bezier(0, 0, 0, 1)" },
          }}
        >
          <ul className="flex flex-col gap-y-3 relative mr-4 pt-5 border-r border-r-white/50 pr-3">
            <li>
              <NavLink className="navlink__item">ثبت نام کتبی</NavLink>
            </li>
            <li>
              <NavLink className="navlink__item">
                ثبت درخواست سکونت مهمان در خوابگاه
              </NavLink>
            </li>
          </ul>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Sidebar;
