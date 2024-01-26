import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import captchaGenerator from "../../utils/captchaGenerator";
import TextField from "../../ui/TextField";
import { PiStudent } from "react-icons/pi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router";

const LoginContainer = () => {
  const [captcha, setCaptcha] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { studentCode: "", password: "", captcha: "" },
  });

  const generateRandomHandler = () => {
    setCaptcha(captchaGenerator());
  };

  const submitFormHandler = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("ورود موفقیت آمیز بود.");
      navigate("/student");
    }, 2000);
  };

  useEffect(() => {
    generateRandomHandler();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        className="rounded-lg p-5 mx-3 text-center shadow-lg max-w-[400px] w-full"
        onSubmit={handleSubmit(submitFormHandler)}
      >
        <div className="w-full max-w-[300px] mx-auto">
          <div className="border-b border-b-gray-200 pb-3">
            <img
              src="/images/logo.png"
              alt=""
              className="max-w-[60px] mx-auto"
            />
            <h3 className="text-xl my-2 font-medium">
              سامانه دانشجویی آموزشیار
            </h3>
            <p className="text-sm text-gray-500">
              لطفا اطلاعات دانشجویی خود را وارد کنید
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-y-4">
            <TextField
              iconInput={true}
              icon={
                <PiStudent className="transition-colors absolute text-gray-400 text-2xl right-2 top-0 bottom-0 m-auto input-icon" />
              }
              placeholder="شماره دانشجویی"
              name="studentCode"
              register={register}
              errors={errors}
              validationSchema={{
                required: "وارد کردن نام دانشجویی الزامیست.",
                pattern: {
                  value: /^[1-9]\d{13}$/g,
                  message: "شماره دانشجویی وارده شده صحیح نمی باشد.",
                },
              }}
            />
            <TextField
              iconInput={true}
              icon={
                <LiaUnlockAltSolid className="transition-colors absolute text-gray-400 text-2xl right-2 top-0 bottom-0 m-auto input-icon" />
              }
              placeholder="رمز عبور"
              name="password"
              register={register}
              errors={errors}
              validationSchema={{ required: "وارد کردن رمز عبور الزامیست." }}
            />
          </div>
          <div className="my-10 flex items-center justify-between">
            <div className="basis-1/2">
              <TextField
                name="captcha"
                register={register}
                validationSchema={{
                  validate: (value) =>
                    value.toLowerCase() === captcha.toLowerCase()
                      ? true
                      : "کپچا صحیح نمی باشد.",
                }}
                placeholder="کد تصویر"
                errors={errors}
              />
            </div>
            <button
              type="button"
              className="text-2xl text-gray-500 px-2"
              onClick={generateRandomHandler}
            >
              <MdOutlineChangeCircle />
            </button>
            <div className="bg-[#f0f0f0] tracking-[10px] text-gray-500 text-2xl rounded-lg h-10 flex items-center justify-center basis-1/2">
              {captcha}
            </div>
          </div>
          {isSubmitting ? (
            <div className="mt-5 text-center">
              <Loading />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-[#3953c9] h-11 text-white rounded-lg"
            >
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
