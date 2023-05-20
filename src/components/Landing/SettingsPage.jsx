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
import { BiVolume } from "react-icons/bi";
import { RiBlazeFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";

import "../Common/Slider.style.css";
import "../Common/Global.style.css";

export default function SettingsPage() {
  const navigateList = [
    {
      name: "پروفایل من",
      to: "/MyProfile",
      icon: AiOutlineUser,
      toggle: false,
    },
    {
      name: "مدیریت بازیکن",
      to: "",
      icon: BsClipboard,
      toggle: false,
    },
    {
      name: "تنظیمات پاد",
      to: "",
      icon: MdPodcasts,
      toggle: false,
    },
    {
      name: "تنظیمات صدا",
      to: "",
      icon: BiVolume,
      toggle: true,
    },
    {
      name: "آکادمی پاد",
      to: "",
      icon: RiBlazeFill,
      toggle: false,
    },
    {
      name: "امور مشترکین",
      to: "",
      icon: MdOutlineHeadphones,
      toggle: false,
    },
    {
      name: "وبسایت پاد",
      to: "",
      icon: TbWorld,
      toggle: false,
    },
  ];

  const handleChange = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="h-screen w-full sm:w-4/12 mx-auto overflow-x-hidden backgroundColor1">
      <div>
        <div className="text-white font-iran text-xl font-bold text-center mt-8">
          تنظیمات
        </div>
        <Link
          to=""
          style={{
            background:
              "linear-gradient(212deg, rgba(20,193,233,1) 0%, rgba(61,94,209,1) 69%)",
          }}
          className="h-12 w-7/12 rounded-full flex justify-center items-center mx-auto text-white font-iran mt-6"
        >
          جستجوی نسخه پیشرفته
        </Link>
      </div>
      {/* Start Menu */}

      <div className="w-11/12 h-auto mx-auto mt-6">
        {navigateList.map((item, index) => (
          <div key={index}>
            {item.toggle !== true ? (
              <Link to={item.to}>
                <div className="overlayImage2 flex justify-between items-center w-full h-16 rounded-xl mt-4">
                  <div className="flex justify-center items-center">
                    <item.icon className="w-7 h-7 text-white mr-2" />
                    <div className="font-iran text-white mr-4 font-medium text-base">
                      {item.name}
                    </div>
                  </div>
                  <MdOutlineKeyboardArrowLeft className="w-8 h-8 text-white" />
                </div>
              </Link>
            ) : (
              <div className="overlayImage2 flex justify-between items-center w-full h-16 rounded-xl mt-4">
                <div className="flex justify-center items-center">
                  <item.icon className="w-7 h-7 text-white mr-2" />
                  <div className="font-iran text-white mr-4 font-medium text-base">
                    {item.name}
                  </div>
                </div>
                <div className="ml-4 mt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      onChange={(e) => handleChange(e)}
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-blue-300 dark:peer-focus:ring-sky-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-400"></div>
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* End Menu */}
      <div className="flex justify-around items-center w-11/12 h-16 mx-auto mt-8">
        <Link to="">
          <BsFacebook className="w-7 h-7 text-white" />
        </Link>
        <Link to="">
          <BsYoutube className="w-7 h-7 text-white" />
        </Link>
        <Link to="">
          <BsInstagram className="w-7 h-7 text-white" />
        </Link>
      </div>
      <div className="flex justify-between items-center w-10/12 h-10 mx-auto mt-5 mb-24">
        <Link to="">
          <div className="font-iran text-white underline">شرایط و مقررات</div>
        </Link>
        <Link to="">
          <div className="font-iran text-white underline">وارانتی</div>
        </Link>
        <Link to="">
          <div className="font-iran text-white underline">حفاظت از حریم</div>
        </Link>
      </div>
    </div>
  );
}
