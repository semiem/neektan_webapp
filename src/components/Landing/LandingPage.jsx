import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Common/Slider.style.css";

import { HiOutlinePlus } from "react-icons/hi";
import { ImExit } from "react-icons/im";

import avatar from "../../assets/images/126.png";
import { clearStorage } from "../../core/services/LocalStorage";
import { getAllData } from "../../core/dataFieldAPI";
import logo from "../../assets/images/130.png";

export default function LandingPage({ isExit }) {
  const datas = getAllData();
  const handleExit = () => {
    isExit();
    clearStorage();
  };

  return (
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{
        background: "#132037",
      }}
    >
      <div
        style={{
          background: "#132037",
        }}
        className="fixed border border-transparent w-screen h-20"
      >
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

      <div className="w-full h-40 border border-transparent mt-20">
        <div className="mr-4 my-2 font-iran text-white font-bold text-xl">
          فعالیت های من
        </div>
        <Link to="">
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
                <div className="overlayImage rounded-xl"></div>
                <img
                  src={logo}
                  alt=""
                  style={{ width: "9vh", height: "3vh" }}
                  className="absolute top-5 right-8 text-white"
                />
                <span className="absolute top-12 right-8 text-white font-iran font-bold text-lg">
                  {data.title}
                </span>
                <span className="absolute top-28 right-8 text-white font-iran font-light text-xs">
                  یک بازیکن &#x2022; شش پاد
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6">
        <div className="flex justify-between mx-4">
          <div className="font-iran text-white font-bold text-xl">کاوش</div>
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
                  <div>
                    <img
                      src={logo}
                      alt=""
                      style={{ width: "9vh", height: "3vh" }}
                      className="text-white mr-4 mt-2"
                    />
                    <div
                      className={
                        data.title.length >= 20
                          ? "float-right my-1 text-white font-iran text-xs mr-4"
                          : "float-right my-1 text-white font-iran text-sm mr-4"
                      }
                    >
                      {data.title}
                    </div>
                    <div className="float-right mr-4 text-white font-iran font-light text-xs">
                      یک بازیکن &#x2022; شش پاد
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
