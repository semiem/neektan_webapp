import "../../Common/Global.style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Previews from "./ProfileImageUploader";

export default function MyProfilePage() {
  const handleExit = () => {
    console.log(2);
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden backgroundColor1">
      {/* Top Menu */}
      <div className="flex justify-between mt-5 mx-6">
        <div className="w-5 h-2 bg-transparent"></div>
        <div className="font-iran font-bold text-xl text-white">پروفایل من</div>
        <Link to="/Settings">
          <HiArrowLeft className="w-6 h-6 text-white" />
        </Link>
      </div>
      {/* Image Uploader */}
      <Previews />

      <div className=" w-8/12 h-32 mx-auto">
        <div className="font-iran text-white text-2xl font-normal text-center">
          لورم ایپسوم
        </div>
        <Link
          to=""
          className="w-52 h-10 border bg-transparent border-[#7090bf] py-6 font-iran text-base text-[#7090bf] rounded-full flex justify-center items-center mx-auto mt-6"
        >
          ویرایش پروفایل
        </Link>
      </div>

      {/* Menu */}
      <div className="border-t-2 border-b-2 h-auto border-[#1c314c]">
        <div className="grid grid-cols-1 divide-y-2 divide-[#1c314c]">
          <Link to="">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="font-iran text-[#7090bf] text-lg mr-6 py-4">
                  عضویت من
                </div>
                <div className="w-14 h-5 bg-[#7090bf] font-iran text-white text-xs font-light flex justify-center items-center rounded-full mr-2">
                  بلیز پاد
                </div>
              </div>
              <MdOutlineKeyboardArrowLeft className="w-8 h-8 text-[#7090bf] ml-4" />
            </div>
          </Link>
          <button
            onClick={() => console.log(1)}
            className="flex justify-between items-center cursor-pointer"
          >
            <div className="font-iran text-[#7090bf] text-lg mr-6 py-4">
              حذف حساب کاربری
            </div>
            <MdOutlineKeyboardArrowLeft className="w-8 h-8 text-[#7090bf] ml-4" />
          </button>
        </div>
      </div>
      {/* Sign Out */}
      <button
        onClick={() => handleExit()}
        className="font-iran text-[#7090bf] block mx-auto text-lg underline mt-12 cursor-pointer"
      >
        خروج از حساب
      </button>
    </div>
  );
}
