import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import logo2 from "../../assets/images/127.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../Common/Slider.style.css";

import { PiStarFill, PiStarLight } from "react-icons/pi";
import { HiArrowLeft, HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { BsFlag } from "react-icons/bs";
import { TbReload } from "react-icons/tb";
import { BiInfoCircle } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TiLockClosed } from "react-icons/ti";
import { RiMenuAddLine } from "react-icons/ri";

import { getDataById } from "../../core/dataFieldAPI";
import DetailCard from "./DetailCard";

export default function DetailsPage() {
  const params = useParams();
  const navigate = useNavigate();
  const sportData = getDataById(parseInt(params.id));

  const [isLiked, setIsLiked] = useState(false);

  // For show description
  const [isShowMore, setIsShowMore] = useState(false);

  // Handle Cycles
  const [counter, setCounter] = useState(1);

  // Handle Stations
  const [stations, setStations] = useState(1);

  // ws.onmessage = function (event) {
  //   // const json = JSON.parse(event.data);
  //   try {
  //     console.log(event.data)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Handle Scroll Positions
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ background: "#f1f4fb" }}
      className="w-full sm:w-4/12 mx-auto overflow-x-hidden"
    >
      <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {sportData.slides.map((data, index) => (
            <SwiperSlide key={index}>
              <img src={data} alt="exercise" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={scrollPosition > 380 ? { background: "#01233d" } : null}
          className="fixed top-0 z-20 w-full sm:w-4/12 mx-auto h-16 rounded-b-3xl transition duration-300"
        >
          <div className="flex justify-between mt-5 mx-6">
            <img src={logo2} alt="" className="w-10" />
            <span onClick={() => navigate(-1)}>
              <HiArrowLeft className="w-6 h-6 text-white" />
            </span>
          </div>
        </div>
      </div>
      {/* Start Details */}
      <div className="relative bg-gradient -top-5 z-10 w-full h-fit rounded-2xl border border-transparent">
        <div className="absolute top-3 left-3 flex gap-3 items-center">
          <RiMenuAddLine className="w-5 h-5 text-white cursor-pointer" />
          <div onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? (
              <PiStarFill className="w-5 h-5 cursor-pointer transition duration-300 text-white" />
            ) : (
              <PiStarLight className="w-5 h-5 cursor-pointer transition duration-300 text-white" />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4 transition-all duration-300">
          <div className="text-white font-iran text-lg font-medium ">
            {sportData.title}
          </div>
          <div className="text-white font-iran text-lg font-light">
            توضیحات حرکت
          </div>
          <div>
            <p
              className={`font-iran text-right text-sm text-violet-200 opacity-90 overflow-hidden ${
                isShowMore ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {sportData.description}
            </p>
            <div
              onClick={() => setIsShowMore(!isShowMore)}
              className="text-violet-200 font-iran mt-3 underline underline-offset-4 cursor-pointer"
            >
              توضیحات بیشتر
            </div>
          </div>

          <div className="text-white font-iran text-lg font-light">
            لوازم مورد نیاز
          </div>
          <div className="text-violet-200 font-iran text-sm font-light text-justify">
            {sportData.accessories + " "}
          </div>
          <div className="text-white font-iran text-lg font-light">
            هدف حرکت
          </div>
          <div className="flex mr-2 gap-2 mt-1 overflow-x-scroll py-1">
            {sportData.activityGoals.map((activeGoal, index) => (
              <div
                key={index}
                className="font-iran text-violet-200 text-sm font-normal w-fit py-1.5 px-3 border border-violet-200 rounded-full bg-[#143650]"
              >
                {activeGoal}
              </div>
            ))}
          </div>
          <div>
            <div className="text-white font-iran mt-6 text-lg font-light mb-2">
              مقدمات حرکت
            </div>
            <div className="flex mr-2 gap-2 overflow-x-scroll py-1">
              <DetailCard
                title={sportData.setup.podPerStation}
                subTitle="دستگاه"
              />
              <DetailCard title={sportData.setup.colors} subTitle="رنگ ها" />
              <DetailCard
                title={sportData.setup.duration}
                subTitle="مدت زمان"
              />
            </div>
          </div>
          <div>
            <div className="text-white font-iran mt-6 text-lg font-light mb-2">
              کرنر
            </div>
            <div className="flex mr-2 gap-2 overflow-x-scroll py-1">
              <DetailCard
                title={sportData.rules[0].lightOut.type}
                subTitle={sportData.rules[0].lightOut.time}
              />
              <DetailCard
                title={sportData.rules[0].lightDelay.type}
                subTitle={sportData.rules[0].lightDelay.time}
              />
            </div>
          </div>
          <div>
            <div className="text-white font-iran mt-6 text-lg font-light mb-2">
              زمين بازي
            </div>
            <div className="flex mr-2 gap-2 overflow-x-scroll py-1">
              <DetailCard
                title={sportData.rules[1].lightOut.type}
                subTitle={sportData.rules[1].lightOut.time}
              />
              <DetailCard
                title={sportData.rules[1].lightDelay.type}
                subTitle={sportData.rules[1].lightDelay.time}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Details */}
      <div className="relative bg-[#f0f7ff] p-2.5 w-full h-fit flex flex-col items-center">
        <div className="w-full flex justify-end">
          <div className="w-36 h-11 flex items-center gap-2 px-3 shadow-md shadow-gray-300 rounded-full bg-[#e2ecf4]">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center">
              <TiLockClosed className="w-4 h-4 text-white" />
            </div>
            <span className="font-iran">شخصی سازی</span>
          </div>
        </div>

        {/* Start stations */}
        <div
          style={{ background: "#e4ebf3" }}
          className="w-full flex justify-around items-center h-28 mt-6 px-3 rounded-md"
        >
          <div className="flex items-center w-full h-10">
            <BsFlag className="w-6 h-6" />
            <span className="font-iran text-lg font-medium mx-2 text-cyan-950">
              ایستگاه ها
            </span>
            <BiInfoCircle className="w-5 h-5 cursor-pointer text-gray-800" />
          </div>

          <div className="w-40 h-14 flex justify-around items-center">
            <button
              onClick={() => setStations((prevStations) => ++prevStations)}
              className="w-[3rem] h-10 bg-white shadow-md shadow-[#3a569949] rounded-md flex justify-center items-center cursor-pointer"
            >
              <HiOutlinePlusSm className="w-5 h-5 text-[#3a5699]" />
            </button>
            <div className="w-10 h-10 flex justify-center items-center text-base font-bold text-cyan-950">
              {stations}
            </div>
            <button
              disabled={stations <= 0}
              onClick={() => setStations((prevStations) => --prevStations)}
              className={
                "w-[3rem] h-10 bg-white rounded-md flex justify-center items-center cursor-pointer disabled:opacity-40 disabled:cursor-auto"
              }
            >
              <HiOutlineMinusSm className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
        {/* End stations */}
        {/* Start cycles */}
        <div
          style={{ background: "#e4ebf3" }}
          className="w-full flex justify-around items-center h-28 mt-8 px-3 rounded-md"
        >
          <div className="flex items-center w-full h-10">
            <TbReload className="w-6 h-6 -rotate-90" />
            <span className="font-iran text-lg font-medium mx-2 text-cyan-950">
              تکرار حرکت
            </span>
            <BiInfoCircle className="w-5 h-5 cursor-pointer text-gray-800" />
          </div>

          <div className="w-40 h-14 flex justify-around items-center">
            <button
              onClick={() => setCounter((prevCounter) => ++prevCounter)}
              className="w-[3rem] h-10 bg-white shadow-md shadow-[#3a569949] rounded-md flex justify-center items-center cursor-pointer"
            >
              <HiOutlinePlusSm className="w-5 h-5 text-[#3a5699]" />
            </button>
            <div className="w-10 h-10 flex justify-center items-center text-base font-bold text-cyan-950">
              {counter}
            </div>
            <button
              disabled={counter <= 0}
              onClick={() => setCounter((prevCounter) => --prevCounter)}
              className={
                "w-[3rem] h-10 bg-white rounded-md flex justify-center items-center cursor-pointer disabled:opacity-40 disabled:cursor-auto"
              }
            >
              <HiOutlineMinusSm className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>
        {/* End Cycles */}
        <div className="w-full mt-16">
          <span className="font-iran text-sky-600 text-base mr-3 mb-2">
            ایستگاه 1
          </span>
          <div className="flex flex-col justify-between bg-white rounded-2xl min-h-[170px] px-2 py-4">
            <div className="w-28 h-12 flex items-center gap-2 px-3 shadow-md shadow-gray-300 rounded-full bg-[#eef6fc]">
              <div className="w-8 h-8 rounded-full bg-[#5977bc] flex justify-center items-center">
                <AiOutlineUser className="w-[1.1rem] h-[1.1rem] text-white" />
              </div>
              <span className="font-iran text-base">میلاد</span>
            </div>
            <div className="flex justify-end pl-6 gap-2">
              <div className="w-10 h-10 rounded-full bg-[#f00] border-4 border-white shadow-[0_0_15px_1px] shadow-[#a8b8de]"></div>
              <div className="w-10 h-10 rounded-full bg-[#00f] border-4 border-white shadow-[0_0_15px_1px] shadow-[#a8b8de]"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-around mt-5">
          <Link to="/Timer" state={{ counter: counter }}>
            <button
              // onClick={() => testWebSocket()}
              type="button"
              className="font-iran items-center w-40 px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-button-gradient"
            >
              شروع
            </button>
          </Link>
          <button
            type="button"
            className="font-iran items-center w-40 px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#35c7e1]"
          >
            رزرو حرکت
          </button>
        </div>
      </div>
    </div>
  );
}
