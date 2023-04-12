import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Common/Slider.style.css";

import { HiHome, HiOutlinePlus } from "react-icons/hi";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { ImExit } from "react-icons/im";

import avatar from "../../assets/images/126.png";
import { clearStorage } from "../../core/services/LocalStorage";
import { getAllData } from "../../core/dataFieldAPI";

export default function LandingPage({ isExit }) {
  const [datas] = useState(getAllData);
  const handleExit = () => {
    isExit();
    clearStorage();
  };

  return (
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(40,85,152,1) 0%, rgba(23,35,61,1) 35%, rgba(22,32,44,1) 48%)",
      }}
    >
      <div className="border border-transparent w-screen h-20">
        <div className="flex justify-around items-center mt-4">
          <img src={avatar} alt="" className="w-12 rounded-full" />
          <div className="text-2xl font-iran text-white font-semibold">
            زمین تمرین
          </div>
          <ImExit
            onClick={() => handleExit()}
            className="h-7 w-7 text-white cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full h-40 border border-transparent">
        <div className="mr-4 my-2 font-iran text-white font-bold text-xl">
          فعالیت های من
        </div>
        <Link to="/">
          <div
            style={{
              width: "46vh",
              background:
                "linear-gradient(135deg, rgba(21,44,78,1) 0%, rgba(44,64,99,1) 50%)",
            }}
            className="h-28 mx-auto rounded-2xl border border-transparent"
          >
            <div className="flex justify-center mt-6">
              <div
                style={{
                  background:
                    "linear-gradient(212deg, rgba(20,193,233,1) 0%, rgba(61,94,209,1) 69%)",
                }}
                className="h-16 w-16 rounded-full flex justify-center items-center"
              >
                <HiOutlinePlus className="h-9 w-9 text-white" />
              </div>
              <span className="text-white font-iran font-bold text-xl w-44 mr-4">
                فعالیت های خود را مدیریت کنید
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="border border-transparent">
        <div className="mr-4 mb-2 mt-4 font-iran text-white font-bold text-xl">
          پیشنهادات
        </div>
        <Swiper slidesPerView={"auto"} spaceBetween={20} className="mySwiper">
          {datas.map((data, index) => (
            <SwiperSlide key={index} className="slider1">
              <Link to={`/Detail/${data.id}`}>
                <img
                  src={data.poster}
                  className="relative rounded-xl borderimage mr-4"
                  alt=""
                />
                <span className="absolute top-5 right-8 text-white font-iran">
                  {data.title}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mx-4">
          <div className="mb-2 font-iran text-white font-bold text-xl">
            کاوش
          </div>
          <Link to="/Explore">
            <div className="text-sky-500 text-sm font-normal font-iran">
              دیدن بیشتر
            </div>
          </Link>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={20}
          className="mySwiper mb-20"
        >
          {datas.map((data, index) => (
            <SwiperSlide key={index} className="slider2">
              <Link to={`/Detail/${data.id}`}>
                <div>
                  <img
                    src={data.poster}
                    className="rounded-xl borderimage2 mr-4"
                    alt=""
                  />
                  <span className="flex justify-start my-1 text-white font-iran mr-4">
                    {data.title}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div
          className="fixed bottom-0 w-full h-14 rounded-t-3xl z-50"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,85,152,1) 0%, rgba(23,35,61,1) 65%, rgba(22,32,44,1) 80%)",
          }}
        >
          <div className="flex justify-around mt-3">
            <Link to="/">
              <SlSettings className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/">
              <MdOutlineInsertChartOutlined className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/">
              <RxLapTimer className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/">
              <HiHome className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
