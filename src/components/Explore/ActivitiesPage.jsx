import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ExploreStyle.css";
import { Link } from "react-router-dom";
import { getAllData } from "../../core/dataActivitiesAPI";
import logo from "../../assets/images/130.png";

export default function ActivitiesPage() {
  const datas = getAllData();
  console.log(datas);
  return (
    <div className="mt-5">
      {datas.map((data, index) => (
        <div key={index}>
          <div className="font-iran mt-8 mr-4 mb-2 text-white font-bold text-lg">
            {data.title}
          </div>
          <Swiper slidesPerView={"auto"} spaceBetween={20} className="mySwiper">
            {data.activities.map((da, ind) => (
              <SwiperSlide key={ind} className="slider5">
                <Link to={`/Detail/${da.id}`}>
                  <img
                    src={da.poster}
                    alt=""
                    className="img5"
                    style={{
                      width: "16vh",
                      height: "11vh",
                      borderRadius: "10px",
                      display: "block",
                      float: "right",
                    }}
                  />
                  <div className="mt-3">
                    <div className="font-iran text-white font-xs mr-2">
                      <img
                        src={logo}
                        alt=""
                        style={{ width: "6vh" }}
                        className="mx-auto"
                      />
                    </div>
                    <div className="font-iran text-white font-xs mr-2">
                      {da.title}
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
