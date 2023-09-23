import { Link } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import {
  BsClipboard,
  BsInstagram,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import {
  MdPodcasts,
  MdOutlineHeadphones,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { LuWrench } from "react-icons/lu";
import { RiBlazeFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";

import "../Common/Slider.style.css";
import "../Common/Global.style.css";

export default function SettingsPage() {
  const navigateList = [
    { name: "پروفایل من", to: "/MyProfile", icon: AiOutlineUser },
    { name: "مدیریت بازیکن", to: "", icon: BsClipboard },
    { name: "تنظیمات پاد", to: "", icon: MdPodcasts },
    { name: "اولویت ها", to: "", icon: LuWrench },
    { name: "آکادمی پاد", to: "", icon: RiBlazeFill },
    { name: "امور مشترکین", to: "", icon: MdOutlineHeadphones },
    { name: "فروشگاه پاد", to: "", icon: BiShoppingBag },
  ];

  const handleChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="h-screen w-full sm:w-4/12 mx-auto overflow-x-hidden bg-settings-gradient">
      <div>
        <div className="text-white font-iran text-xl font-bold text-center mt-14">
          تنظیمات
        </div>
        <Link
          to=""
          className="h-[54px] w-7/12 rounded-full flex justify-center items-center mx-auto bg-buttonPro-gradient text-white font-iran mt-6"
        >
          جستجوی نسخه پیشرفته
        </Link>
      </div>
      {/* Start Menu */}

      <div className="w-11/12 h-auto mx-auto mt-6">
        {navigateList.map((item, index) => (
          <Link key={index} to={item.to}>
            <div className="overlayImage2 flex justify-between items-center w-full h-16 rounded-xl mt-4">
              <div className="flex justify-center items-center">
                <item.icon className="w-7 h-7 text-white mr-3" />
                <div className="font-iran text-white mr-3 font-medium text-base">
                  {item.name}
                </div>
              </div>
              <MdOutlineKeyboardArrowLeft className="w-7 h-7 text-white" />
            </div>
          </Link>
        ))}
      </div>

      {/* End Menu */}
      <div className="flex justify-around items-center w-11/12 h-16 mx-auto mt-8">
        <Link to="">
          <BsFacebook className="w-7 h-7 text-white" />
        </Link>
        <Link to="">
          <BsYoutube className="w-8 h-8 text-white" />
        </Link>
        <Link to="">
          <BsInstagram className="w-7 h-7 text-white" />
        </Link>
      </div>
      <div className="flex justify-between items-center w-10/12 h-10 mx-auto mt-8">
        <Link to="">
          <div className="font-iran text-white underline underline-offset-2">
            شرایط و مقررات
          </div>
        </Link>
        <Link to="">
          <div className="font-iran text-white underline underline-offset-2">
            وارانتی
          </div>
        </Link>
        <Link to="">
          <div className="font-iran text-white underline underline-offset-2">
            حفاظت از حریم
          </div>
        </Link>
      </div>
      <div className="mt-5 mb-24 text-gray-400 text-center font-iran">
          پاد - ورژن 3.11.2.0
      </div>
    </div>
  );
}
