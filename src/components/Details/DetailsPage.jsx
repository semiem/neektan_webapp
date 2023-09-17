import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

import logo from "../../assets/images/130.png";
import logo2 from "../../assets/images/127.png";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import "../Common/Slider.style.css";

import {CiStar} from "react-icons/ci";
import {RiPlayListAddLine} from "react-icons/ri";
import {HiArrowLeft, HiOutlinePlusSm, HiOutlineMinusSm} from "react-icons/hi";
import {BsRepeat, BsFlag} from "react-icons/bs";
import {BiInfoCircle} from "react-icons/bi";

import {getDataById} from "../../core/dataFieldAPI";

export default function DetailsPage() {
    // Handle URL Params
    const params = useParams();
    const sportData = getDataById(parseInt(params.id));

    const [textControl, setTextControl] = useState(false);

    // Handle Cycles
    const [counter, setCounter] = useState(1);

    const handlePlusCounter = () => {
        setCounter(counter + 1);
    };

    const handleMinusCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    // Handle Stations
    const [stations, setStations] = useState(1);

    const handlePlusStations = () => {
        setStations(stations + 1);
    };

    const handleMinusStations = () => {
        if (stations > 1) {
            setStations(stations - 1);
        }
    };


    // ws.onmessage = function (event) {
    //   // const json = JSON.parse(event.data);
    //   try {
    //     console.log(event.data)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    const [ws, setWs] = useState();

    useEffect(() => {
        setWs(new WebSocket("ws://192.168.66.66:81"))
        console.log("TESTT")
        // ws.onopen = (event) => {
        //     console.log(ws.readyState)
        //
        // };
    }, []);


    const [readyState, setReadyState] = useState(true);
    const testWebSocket = (data) => {

        // const ws = new WebSocket("ws://192.168.66.66:81");
        if (ws.readyState != 1) {
            console.log("Still Conncting");
        } else {
            if (readyState) {

                (function myLoop(i) {
                    console.log("Counter: " + counter)
                    setTimeout(function () {
                        const tData = {
                            event: "Move That Cone",
                            data: {
                                "p1": i % 3 == 0 ? true : false,
                                "p2": i % 3 == 1 ? true : false,
                                "p3": i % 3 == 2 ? true : false
                            },
                        };
                        ws.send(JSON.stringify(tData));
                        if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
                    }, 2000)
                })(3 * counter);
                return

                // let i = 1;
                // function counterLoop() {
                //     setTimeout(function () {
                //         console.log("counter= " + counter);
                //         i++;
                //         if (i < counter) {
                //             let j = 1;
                //             function stationLoop() {
                //                 setTimeout(function () {
                //                     console.log("station= " + j);
                //                     j++;
                //                     if (j < stations) {
                //                         stationLoop();
                //                     }
                //                 }, 2000)
                //             }
                //             stationLoop();
                //         }
                //     }, 1000)
                //
                // }
                // counterLoop();
            }


        }

        // const tData = {
        //   event: "bts:subscribe",
        //   data: { channel: "order_book_btcusd" },
        // };
        // ws.send(JSON.stringify(tData));
    }


    // Handle Scroll Positions
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            style={{background: "#f1f4fb"}}
            className="w-full sm:w-4/12 mx-auto overflow-x-hidden"
        >
            <div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    {sportData.slides.map((data, index) => (
                        <SwiperSlide key={index}>
                            <img src={data} alt=""/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    style={scrollPosition > 380 ? {background: "#04192F"} : null}
                    className="fixed top-0 z-20 w-full sm:w-4/12 mx-auto h-16 rounded-b-3xl transition duration-300"
                >
                    <div className="flex justify-between mt-5 mx-6">
                        <img src={logo2} alt="" className="w-10"/>
                        <Link to="/Home">
                            <HiArrowLeft className="w-6 h-6 text-white"/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Start Details */}
            <div
                className="relative -top-5 z-10 w-full h-fit rounded-3xl border border-transparent"
                style={{
                    background: "#04192F",
                }}
            >
                <div className="flex justify-between items-center w-full h-16 border border-transparent">
                    <img src={logo} alt="" className="w-20 h-10 mr-4"/>
                    <div className="flex justify-around items-center w-28 mr-2 h-14">
                        <CiStar className="w-7 h-7 text-white cursor-pointer"/>
                        <RiPlayListAddLine className="w-6 h-6 text-white cursor-pointer"/>
                    </div>
                </div>

                <div>
                    <div className="text-violet-200 font-iran mt-4 mr-4 text-lg font-light">
                        نام حرکت
                    </div>
                    <div className="text-white font-iran mr-4 text-lg font-medium">
                        {sportData.title}
                    </div>
                    <div className="text-white font-iran mt-4 mr-4 text-lg font-light">
                        توضیحات حرکت
                    </div>
                    <div className="text-violet-200 font-iran mx-4 text-sm font-light text-justify">
                        {textControl === false && sportData.description.length > 250
                            ? sportData.description.slice(0, 250) + "..."
                            : sportData.description}
                    </div>
                    {sportData.description.length > 250 ? (
                        <div>
                            {textControl === false ? (
                                <span
                                    onClick={() => setTextControl(true)}
                                    className="text-white underline font-iran text-xs font-light mr-4 cursor-pointer"
                                >
                  توضیحات بیشتر
                </span>
                            ) : (
                                <span
                                    onClick={() => setTextControl(false)}
                                    className="text-white underline font-iran text-xs font-light mr-4 cursor-pointer"
                                >
                  بستن توضیحات
                </span>
                            )}
                        </div>
                    ) : null}

                    <div className="text-white font-iran mt-4 mr-4 text-lg font-light">
                        لوازم مورد نیاز
                    </div>
                    <div className="text-violet-200 font-iran mx-4 text-sm font-light text-justify">
                        {sportData.accessories + " "}
                    </div>
                    <div className="text-white font-iran mt-4 mr-4 text-lg font-light">
                        هدف حرکت
                    </div>
                    <div className="flex justify-start mt-1 mb-4">
                        {sportData.activityGoals.map((activeGoal, index) => (
                            <div
                                key={index}
                                className="font-iran text-white text-xs font-normal border border-white w-fit py-1.5 px-4 mr-3 rounded-full bg-white/5"
                            >
                                {activeGoal}
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="text-white font-iran mt-6 mr-4 text-lg font-light mb-2">
                            مقدمات حرکت
                        </div>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            className="mySwiper swiper3 mb-4"
                        >
                            <SwiperSlide className="rounded-xl bg-white/5 slider3 mr-2">
                                <div>
                  <span className="flex justify-start my-1 text-white font-iran">
                    {sportData.setup.podPerStation}
                  </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-xl bg-white/5 slider3">
                                <div>
                  <span className="flex justify-start my-1 text-white font-iran">
                    {sportData.setup.colors}
                  </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-xl bg-white/5 slider3">
                                <div>
                  <span
                      style={{direction: "ltr"}}
                      className="flex justify-start my-1 text-white font-iran"
                  >
                    {sportData.setup.duration}
                  </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <div className="text-white font-iran mt-4 mr-4 text-lg font-light mb-2">
                            کرنر
                        </div>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            className="mySwiper mb-4"
                        >
                            <SwiperSlide className="slider3 rounded-xl bg-white/5 mr-2">
                                <div>
                  <span className="flex justify-center mt-1 text-white font-iran font-normal text-xl">
                    {sportData.rules[0].lightOut.type}
                  </span>
                                    <span
                                        style={{direction: "ltr"}}
                                        className="flex justify-center text-white font-iran font-light text-xs"
                                    >
                    {sportData.rules[0].lightOut.time}
                  </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-xl bg-white/5 slider3">
                                <div>
                  <span className="flex justify-center mt-1 text-white font-iran font-normal text-xl">
                    {sportData.rules[0].lightDelay.type}
                  </span>
                                    <span
                                        style={{direction: "ltr"}}
                                        className="flex justify-center text-white font-iran font-light text-xs"
                                    >
                    {sportData.rules[0].lightDelay.time}
                  </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <div className="text-white font-iran mt-4 mr-4 text-lg font-light mb-2">
                            زمین بازی
                        </div>
                        <Swiper
                            slidesPerView={"auto"}
                            spaceBetween={10}
                            className="mySwiper swiper3 mb-6"
                        >
                            <SwiperSlide className="rounded-xl bg-white/5 slider3 mr-2">
                                <div>
                  <span className="flex justify-center mt-1 text-white font-iran font-normal text-xl">
                    {sportData.rules[1].lightOut.type}
                  </span>
                                    <span
                                        style={{direction: "ltr"}}
                                        className="flex justify-center text-white font-iran font-light text-xs"
                                    >
                    {sportData.rules[1].lightOut.time}
                  </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="rounded-xl bg-white/5 slider3">
                                <div>
                  <span className="flex justify-center mt-1 text-white font-iran font-normal text-xl">
                    {sportData.rules[1].lightDelay.type}
                  </span>
                                    <span
                                        style={{direction: "ltr"}}
                                        className="flex justify-center text-white font-iran font-light text-xs"
                                    >
                    {sportData.rules[1].lightDelay.time}
                  </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* End Details */}
            <div className="relative -top-5 w-full h-fit">
                {/* Start stations */}
                <div
                    style={{background: "#e2e9f1"}}
                    className="flex justify-around items-center w-full h-20 mt-8"
                >
                    <div className="flex justify-between items-center w-36 h-10">
                        <BsFlag className="w-6 h-6"/>
                        <span className="font-iran text-base font-medium mx-2">
              ایستگاه ها
            </span>
                        <BiInfoCircle className="w-4 h-4 text-xs cursor-pointer"/>
                    </div>

                    <div className="w-40 h-14 flex justify-around items-center">
                        <div
                            onClick={() => handlePlusStations()}
                            className="w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
                        >
                            <HiOutlinePlusSm className="w-6 h-6 text-gray-600"/>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center">
                            {stations}
                        </div>
                        <div
                            onClick={() => handleMinusCounter()}
                            className={
                                stations > 1
                                    ? "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
                                    : "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer opacity-40"
                            }
                        >
                            <HiOutlineMinusSm className="w-6 h-6 text-gray-600"/>
                        </div>
                    </div>
                </div>
                {/* End stations */}
                {/* Start cycles */}
                <div
                    style={{background: "#e2e9f1"}}
                    className="flex justify-around items-center w-full h-20 mt-8"
                >
                    <div className="flex justify-between items-center w-36 h-10">
                        <BsRepeat className="w-6 h-6"/>
                        <span className="font-iran text-base font-medium mx-2">
              تکرار حرکت
            </span>
                        <BiInfoCircle className="w-4 h-4 text-xs cursor-pointer"/>
                    </div>

                    <div className="w-40 h-14 flex justify-around items-center">
                        <div
                            onClick={() => handlePlusCounter()}
                            className="w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
                        >
                            <HiOutlinePlusSm className="w-6 h-6 text-gray-600"/>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center">
                            {counter}
                        </div>
                        <div
                            onClick={() => handleMinusCounter()}
                            className={
                                counter > 1
                                    ? "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer"
                                    : "w-10 h-10 bg-white shadow-md rounded-md flex justify-center items-center cursor-pointer opacity-40"
                            }
                        >
                            <HiOutlineMinusSm className="w-6 h-6 text-gray-600"/>
                        </div>
                    </div>
                </div>
                {/* End Cycles */}

                <div className="mt-4 flex justify-around">
                    <Link to="/Timer" params={{ testvalue: "hello" }}>
                        <button
                            // onClick={() => testWebSocket()}
                            type="button"
                            className="font-iran items-center w-40 px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500"
                        >
                            شروع
                        </button>
                    </Link>
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
