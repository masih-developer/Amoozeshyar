import StatBox from "../ui/StatBox";

const Home = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <StatBox title="خلاصه وضعیت تحصیلی" details></StatBox>
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
