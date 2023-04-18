import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import logo from "../../assets/images/127.png";
import pic from "../../assets/images/128.png";
import { MdOutlineTimer, MdLock } from "react-icons/md";
import { RiHeartPulseFill } from "react-icons/ri";
import "../Common/Slider.style.css";

export default function PerformanceTestPage() {
  return (
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{
        background: "#132037",
      }}
    >
      <div
        className="fixed z-10 w-screen"
        style={{
          background: "#132037",
        }}
      >
        <div className="flex justify-between mt-5 mx-6">
          <img src={logo} alt="" className="w-10" />
          <div className="font-iran font-bold text-xl text-white">
            آزمون عملکرد
          </div>
          <div className="w-8 bg-transparent"></div>
        </div>
      </div>
      {/* End Tab */}
      {/* Start Search */}
      <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end mt-16">
        <div className="max-w-lg w-full lg:max-w-xs mx-auto mt-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <HiSearch className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full font-iran pl-10 pr-4 py-2 text-white border border-transparent rounded-full leading-5 bg-white/10 placeholder-white outline-none focus:placeholder-gray-400 focus:border-transparent focus:ring-0 text-sm"
              placeholder="جستجو"
              type="search"
            />
          </div>
        </div>
      </div>
      {/* End Search */}
      <div className="mb-20">
        <Link to="/">
          <div className="relative  mx-auto mt-4" style={{ width: "95vw" }}>
            <img src={pic} alt="" className="rounded-xl mx-auto" />
            <div className="overlayImage1 rounded-xl"></div>
            <div
              className="absolute right-6 top-0 h-8 mt-4"
              style={{ width: "82vw" }}
            >
              <div className="flex justify-between">
                <div className="flex items-center mt-1">
                  <MdOutlineTimer className="w-6 h-6 text-sky-500" />
                  <div className="text-white font-iran mr-1">تست</div>
                </div>
                <MdLock className="text-gray-400 w-7 h-7" />
              </div>
              <div className="text-white font-iran text-2xl font-bold mr-1 mt-1">
                تست بدنسازی
              </div>
              <div className="absolute top-40 right-2 text-white font-iran font-light text-xs">
                یک بازیکن &#x2022; شش پاد
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="relative  mx-auto mt-4" style={{ width: "95vw" }}>
            <img src={pic} alt="" className="rounded-xl mx-auto" />
            <div className="overlayImage1 rounded-xl"></div>
            <div
              className="absolute right-6 top-0 h-8 mt-4"
              style={{ width: "82vw" }}
            >
              <div className="flex justify-between">
                <div className="flex items-center mt-1">
                  <RiHeartPulseFill className="w-6 h-6 text-sky-500" />
                  <div className="text-white font-iran mr-1">تست</div>
                </div>
                <MdLock className="text-gray-400 w-7 h-7" />
              </div>
              <div className="text-white font-iran text-2xl font-bold mr-1 mt-1">
                تست بدنسازی
              </div>
              <div className="absolute top-40 right-2 text-white font-iran font-light text-xs">
                یک بازیکن &#x2022; شش پاد
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
