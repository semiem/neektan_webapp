import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import logo from "../../assets/images/130.png";
import logo2 from "../../assets/images/127.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Common/SliderStyleDetails.css";
import { Pagination } from "swiper";

import { CiStar } from "react-icons/ci";
import { RiPlayListAddLine } from "react-icons/ri";
import { HiArrowLeft, HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { BsRepeat } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";

import { getDataById } from "../../core/dataFieldAPI";

export default function DetailsPage() {
  const params = useParams();
  const sportData = getDataById(parseInt(params.id));

  const [counter, setCounter] = useState(1);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  console.log(sportData.activities[0]);
  return (
    <div>
      <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {sportData.activities[0].slides.map((data, index) => (
            <SwiperSlide key={index}>
              <img src={data} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fixed top-0 z-20 w-screen h-16">
          <div className="flex justify-between mt-10 mx-6">
            <img src={logo2} alt="" className="w-10" />
            <Link to="/">
              <HiArrowLeft className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      {/* Start Details */}
      <div
        className="relative -top-5 z-10 w-screen h-fit rounded-3xl border border-transparent"
        style={{
          background:
            "linear-gradient(180deg, rgba(40,85,152,1) 0%, rgba(23,35,61,1) 35%, rgba(22,32,44,1) 48%)",
        }}
      >
        <div className="flex justify-between items-center w-full h-16 border border-transparent">
          <img src={logo} alt="" className="w-20 h-10 mr-4" />
          <div className="flex justify-around items-center w-28 mr-2 h-14">
            <CiStar className="w-7 h-7 text-white cursor-pointer" />
            <RiPlayListAddLine className="w-6 h-6 text-white cursor-pointer" />
          </div>
        </div>

        <div>
          <div className="text-violet-200 font-iran mt-4 mr-4 text-lg font-light">
            نام حرکت
          </div>
          <div className="text-white font-iran mr-4 text-lg font-medium">
            {sportData.activities[0].title}
          </div>
          <div className="text-white font-iran mt-4 mr-4 text-lg font-light">
            توضیحات بیشتر
          </div>
          <div className="text-violet-200 font-iran mx-4 text-sm font-light text-justify">
            {sportData.activities[0].description}
          </div>
          <div className="text-white font-iran mt-4 mr-4 text-lg font-light">
            هدف حرکت
          </div>
          <div className="flex justify-start mt-1 mb-4">
            {sportData.activities[0].activityGoals.map((activeGoal, index) => (
              <div
                key={index}
                className="font-iran text-white text-sm border border-white w-fit p-1 mr-3 rounded-full bg-slate-700/50"
              >
                {activeGoal}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Slider */}
      <div className="relative -top-5 w-screen h-fit">
        {/* Start Counter */}
        <div className="flex justify-around items-center w-full h-20 bg-sky-500/10 mt-4">
          <div className="flex justify-between items-center w-36 h-10">
            <BsRepeat className="w-6 h-6" />
            <span className="font-iran text-base font-medium mx-2">
              تکرار حرکت
            </span>
            <BiInfoCircle className="w-4 h-4 text-xs cursor-pointer" />
          </div>

          <div className="w-40 h-14 flex justify-around items-center">
            <div
              onClick={() => handlePlus()}
              className="w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
            >
              <HiOutlinePlusSm className="w-6 h-6 text-gray-600" />
            </div>
            <div className="w-10 h-10 flex justify-center items-center">
              {counter}
            </div>
            <div
              onClick={() => handleMinus()}
              className={
                counter > 1
                  ? "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
                  : "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer opacity-40"
              }
            >
              <HiOutlineMinusSm className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
        {/* End Counter */}

        <div className="mt-4 flex justify-around">
          <button
            type="button"
            className="font-iran items-center w-40 px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500"
          >
            شروع
          </button>
          <button
            type="button"
            className="font-iran items-center w-40 px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-sky-400"
          >
            رزرو حرکت
          </button>
        </div>
      </div>
    </div>
  );
}
