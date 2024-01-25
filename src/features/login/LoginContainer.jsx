import { PiStudent } from "react-icons/pi";
import { LiaUnlockAltSolid } from "react-icons/lia";
import { MdOutlineChangeCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import captchaGenerator from "../../utils/captchaGenerator";

const LoginContainer = () => {
  const [captcha, setCaptcha] = useState("");
  const generateRandomHandler = () => {
    setCaptcha(captchaGenerator());
  };
  useEffect(() => {
    generateRandomHandler();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form className="rounded-lg p-5 mx-3 text-center shadow-lg max-w-[400px] w-full">
        <div className="w-full max-w-[300px] mx-auto">
          <div className="border-b border-b-gray-200 pb-3">
            <img src="/logo.png" alt="" className="max-w-[60px] mx-auto" />
            <h3 className="text-xl my-2 font-medium">
              سامانه دانشجویی آموزشیار
            </h3>
            <p className="text-sm text-gray-500">
              لطفا اطلاعات دانشجویی خود را وارد کنید
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-y-4">
            <div className="relative">
              <input
                type="text"
                className="app-input--icon"
                placeholder="شماره دانشجویی"
              />
              <PiStudent className="transition-colors absolute text-gray-400 text-2xl right-2 top-0 bottom-0 m-auto input-icon" />
            </div>
            <div className="relative">
              <input
                type="password"
                className="app-input--icon"
                placeholder="رمز عبور"
              />
              <LiaUnlockAltSolid className="transition-colors absolute text-gray-400 text-2xl right-2 top-0 bottom-0 m-auto input-icon" />
            </div>
          </div>
          <div className="my-10 flex items-center justify-between">
            <input
              type="text"
              className="app-input basis-2/5"
              placeholder="کد تصویر"
            />
            <button
              type="button"
              className="text-2xl text-gray-500"
              onClick={generateRandomHandler}
            >
              <MdOutlineChangeCircle />
            </button>
            <div className="bg-[#f0f0f0] tracking-[10px] text-gray-500 text-2xl rounded-lg h-10 flex items-center justify-center shrink-0 basis-2/5">
              {captcha}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3953c9] h-11 text-white rounded-lg"
          >
            ورود دانشجو
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginContainer;
