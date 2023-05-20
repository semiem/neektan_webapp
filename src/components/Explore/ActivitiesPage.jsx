import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "../Common/Slider.style.css";
import { Grid } from "swiper";

import { Link } from "react-router-dom";
import logo from "../../assets/images/130.png";
import { getAllData } from "../../core/dataActivitiesAPI";

export default function ActivitiesPage() {
  const datas = getAllData();

  return (
    <div className="mt-5">
      {datas.map((data, index) => (
        <div key={index}>
          <div className="font-iran mt-8 mr-4 mb-2 text-white font-bold text-lg">
            {data.title}
          </div>
          <Swiper
            slidesPerView={1}
            grid={{
              rows: 2,
            }}
            spaceBetween={20}
            modules={[Grid]}
            className="mySwiper"
          >
            {data.activities.map((da, ind) => (
              <SwiperSlide key={ind} className="slider4">
                <Link to={`/Detail/${da.id}`}>
                  <img
                    src={da.poster}
                    alt=""
                    style={{
                      width: "23vh",
                      height: "16vh",
                      borderRadius: "10px",
                      display: "block",
                      float: "right",
                    }}
                  />
                  <div className="mt-4 flex flex-col place-items-start w-fit">
                    <img src={logo} alt="" className="mr-4 imgcustom" />
                    <div
                      className={
                        da.title.length >= 20
                          ? "font-iran text-white font-xs mr-4 text-base font-semibold"
                          : "font-iran text-white font-xs mr-4 text-lg font-semibold"
                      }
                    >
                      {da.title}
                    </div>
                    <div className="mr-4 text-white font-iran font-light text-xs">
                      یک بازیکن &#x2022; شش پاد
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}
