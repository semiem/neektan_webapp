import { useState } from "react";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { TbChartAreaLineFilled } from "react-icons/tb";
import "../Common/Global.style.css";

export default function AnalyticsPage() {
  const tabs = [{ name: "آنالیز" }, { name: "تاریخچه" }];
  const [controlTabs, setControlTabs] = useState(tabs[0].name);

  return (
    <div className="h-screen w-full sm:w-4/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="flex justify-between items-center mx-4 h-20">
        <div className="w-12 h-12 bg-white/30 rounded-full flex justify-center items-center cursor-pointer">
          <AiOutlineUser className="text-white w-6 h-6" />
        </div>
        <div className="w-12 h-12 bg-white/10 rounded-full flex justify-center items-center cursor-pointer">
          <AiOutlineCalendar className="text-white w-6 h-6" />
        </div>
      </div>
      {/* start Tabs */}
      <div className="mx-16 shadow rounded-full h-10 mt-4 flex relative items-center border border-sky-500 bg-white/5">
        <div className="w-full flex justify-center text-white font-iran font-light">
          <button onClick={() => setControlTabs(tabs[0].name)}>
            {tabs[0].name}
          </button>
        </div>
        <div className="w-full flex justify-center text-white font-iran font-light">
          <button onClick={() => setControlTabs(tabs[1].name)}>
            {tabs[1].name}
          </button>
        </div>
        <span
          className={
            controlTabs === tabs[0].name
              ? "bg-white/20 border border-sky-500 shadow text-white font-semibold font-iran flex items-center justify-center w-1/2 rounded-full h-10 absolute left-150"
              : "bg-white/20 border border-sky-500 shadow text-white font-semibold font-iran flex items-center justify-center w-1/2 rounded-full h-10 absolute left-0"
          }
        >
          {controlTabs}
        </span>
      </div>
      {/* End Tabs */}
      {/* Start Details */}
      <div className="mx-auto w-5/6 mt-20">
        <TbChartAreaLineFilled className="h-20 w-20 text-sky-500/40 mx-auto" />
        <div className="font-iran text-white text-lg font-semibold text-md text-center mt-2">
          هنوز فعالیت خاصی انجام نداده اید.
        </div>
        <div className="font-iran text-white font-normal text-md text-center mt-2">
          نخست اولین تمرین خود را کامل کنید، سپس جهت تجزیه و تحلیل، داده های خود
          را بررسی کنید.
        </div>
      </div>
    </div>
  );
}
