import { NavLink } from 'react-router-dom';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { RxDashboard } from 'react-icons/rx';
import SidebarItem from './SidebarItem';
import { PiStudent } from 'react-icons/pi';
import { SlWallet } from 'react-icons/sl';
import { LuFileEdit } from 'react-icons/lu';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { LuBuilding2 } from 'react-icons/lu';

const SidebarContent = () => {
  return (
    <Accordion
      className="flex flex-col gap-y-3"
      transition
      transitionTimeout={500}
    >
      <AccordionItem
        buttonProps={{
          className: 'w-full',
        }}
        header={
          <NavLink className="sidebar-acc__item">
            <RxDashboard className="text-lg" />
            داشبورد دانشجو
          </NavLink>
        }
        panelProps={{ className: 'bg-red-500' }}
      ></AccordionItem>
      <SidebarItem
        title="ثبت نام دروس دانشجو"
        icon={<PiStudent className="text-lg" />}
        links={[
          { id: 1, title: 'انتخاب واحد' },
          { id: 2, title: 'حذف و اضافه' },
          { id: 3, title: 'حذف اضطراری' },
          { id: 4, title: 'آخرین وضعیت ترم جاری' },
          { id: 5, title: 'مدیریت مالی نیمسال تحصیلی' },
          { id: 6, title: 'مدیریت پرداخت ها' },
          { id: 7, title: 'ارسال درخواست اعتراض به نمره' },
          { id: 8, title: 'مشاهده کارنامه' },
        ]}
        initialEntered
      />
      <SidebarItem
        title="صندوق رفاه دانشجویی"
        icon={<SlWallet className="text-lg" />}
        links={[{ id: 1, title: 'درخواست / پیگیری تسهیلات' }]}
      />
      <SidebarItem
        title="درخواست / مجوز"
        icon={<LuFileEdit className="text-lg" />}
        links={[{ id: 1, title: 'ارسال / پیگیری درخواست دانشجو' }]}
      />
      <SidebarItem
        title="ارزشیابی استاد"
        icon={<LiaChalkboardTeacherSolid className="text-lg" />}
        links={[{ id: 1, title: 'ارزشیابی استاد در نیمسال جاری' }]}
      />
      <SidebarItem
        title="مدیریت امور خوابگاه ها"
        icon={<LuBuilding2 className="text-lg" />}
        links={[
          { id: 1, title: 'ثبت نام کتبی' },
          { id: 2, title: 'ثبت درخواست سکونت مهمان در خوابگاه' },
        ]}
      />
    </Accordion>
  );
};

export default SidebarContent;
