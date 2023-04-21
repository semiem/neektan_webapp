import "../Common/Slider.style.css";
import pic from "../../assets/images/131.jpg";
import logo from "../../assets/images/130.png";

export default function CollectionsPage() {
  return (
    <div>
      {/* Start Collections */}
      <div className="w-11/12 h-24 mx-auto mt-4">
        <div className="flex">
          {/* Folder Shape */}
          <div className="relative">
            <div className="absolute w-32 h-16 right-1 top-4 rounded-xl bg-[#213a63] z-[1]"></div>
            <div className="absolute w-32 h-20 right-2 top-2 rounded-xl bg-[#194375] z-[2]"></div>
            <div className="absolute w-32 h-24 right-3 rounded-xl bg-[#4685ba] z-[3]">
              <div className="overlayImage1 rounded-xl"></div>
            </div>
          </div>
          <div className="flex -space-x-4 -mr-2">
            <div className="w-10 h-10 border-2 border-transparent"></div>
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
          </div>
          {/* Start Text */}
          <div className="mr-12 mt-3">
            <img src={logo} alt="" className="w-16" />
            <div className="font-iran text-white text-lg font-medium mt-1">
              حرکات اصلاحی
            </div>
            <div className="float-right mt-1 text-white font-iran font-light text-xs">
              شش فعالیت
            </div>
          </div>
        </div>
      </div>
      {/* End Collections */}
      {/* Start Collections */}
      <div className="w-11/12 h-24 mx-auto mt-4">
        <div className="flex">
          {/* Folder Shape */}
          <div className="relative">
            <div className="absolute w-32 h-16 right-1 top-4 rounded-xl bg-[#213a63] z-[1]"></div>
            <div className="absolute w-32 h-20 right-2 top-2 rounded-xl bg-[#194375] z-[2]"></div>
            <div className="absolute w-32 h-24 right-3 rounded-xl bg-[#4685ba] z-[3]">
              <div className="overlayImage1 rounded-xl"></div>
            </div>
          </div>
          <div className="flex -space-x-4 -mr-2">
            <div className="w-10 h-10 border-2 border-transparent"></div>
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
          </div>
          {/* Start Text */}
          <div className="mr-12 mt-3">
            <img src={logo} alt="" className="w-16" />
            <div className="font-iran text-white text-lg font-medium mt-1">
              حرکات اصلاحی
            </div>
            <div className="float-right mt-1 text-white font-iran font-light text-xs">
              شش فعالیت
            </div>
          </div>
        </div>
      </div>
      {/* End Collections */}
      {/* Start Collections */}
      <div className="w-11/12 h-24 mx-auto mt-4">
        <div className="flex">
          {/* Folder Shape */}
          <div className="relative">
            <div className="absolute w-32 h-16 right-1 top-4 rounded-xl bg-[#213a63] z-[1]"></div>
            <div className="absolute w-32 h-20 right-2 top-2 rounded-xl bg-[#194375] z-[2]"></div>
            <div className="absolute w-32 h-24 right-3 rounded-xl bg-[#4685ba] z-[3]">
              <div className="overlayImage1 rounded-xl"></div>
            </div>
          </div>
          <div className="flex -space-x-4 -mr-2">
            <div className="w-10 h-10 border-2 border-transparent"></div>
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-[#59a6e6] rounded-full mt-9 z-10"
              src={pic}
              alt=""
            />
          </div>
          {/* Start Text */}
          <div className="mr-12 mt-3">
            <img src={logo} alt="" className="w-16" />
            <div className="font-iran text-white text-lg font-medium mt-1">
              حرکات اصلاحی
            </div>
            <div className="float-right mt-1 text-white font-iran font-light text-xs">
              شش فعالیت
            </div>
          </div>
        </div>
      </div>
      {/* End Collections */}
    </div>
  );
}
