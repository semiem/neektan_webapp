import { useState } from "react";
import "../Common/Global.style.css";
import { HiArrowLeft } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../assets/images/130.png";
import pic from "../../assets/images/131.jpg";

export default function CollectionDetailsPage() {
  const [textControl, setTextControl] = useState(false);

  const text =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.";

  return (
    <div className="h-screen w-screen overflow-x-hidden backgroundColor1">
      {/* Top Menu */}
      <div className="flex justify-between items-center mt-5 mx-6">
        <div className="w-10 h-10 bg-white/5 rounded-full flex justify-center items-center cursor-pointer">
          <CiStar className="text-white w-7 h-7" />
        </div>
        <Link to="/Explore">
          <HiArrowLeft className="w-6 h-6 text-white" />
        </Link>
      </div>
      {/* Start Text */}
      <div className="w-10/12 h-auto mx-auto mt-10">
        <img src={logo} alt="" className="w-16" />
        <div className="font-iran text-white text-xl mt-2 font-medium">
          فول بادی هفته اول
        </div>
        <div className="text-justify font-iran text-[#a2bee9] text-xs mt-6">
          {textControl === false && text.length > 250
            ? text.slice(0, 250) + "..."
            : text}
        </div>
        {text.length > 250 ? (
          <div>
            {textControl === false ? (
              <span
                onClick={() => setTextControl(true)}
                className="text-[#a2bee9] underline font-iran text-xs font-light cursor-pointer"
              >
                توضیحات بیشتر
              </span>
            ) : (
              <span
                onClick={() => setTextControl(false)}
                className="text-[#a2bee9] underline font-iran text-xs font-light cursor-pointer"
              >
                بستن توضیحات
              </span>
            )}
          </div>
        ) : null}
        <div className="font-iran text-[#a2bee9] text-xs mt-6">شش فعالیت</div>
      </div>
      {/* Start Activities */}
      <div className="w-10/12 h-auto mx-auto my-6">
        <Link to="/Detail/201">
          <div className="w-11/12 h-24 mt-4">
            <div className="flex">
              {/* Folder Shape */}
              <img src={pic} alt="" className="w-36 h-24 rounded-xl" />
              {/* Start Text */}
              <div className="mr-3 mt-3">
                <img src={logo} alt="" className="w-16" />
                <div className="font-iran text-white text-lg font-medium mt-1">
                  حرکات اصلاحی
                </div>
                <div className="float-right mt-1 text-white font-iran font-light text-xs">
                  یک بازیکن &#x2022; شش پاد
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Detail/301">
          <div className="w-11/12 h-24 mt-4">
            <div className="flex">
              {/* Folder Shape */}
              <img src={pic} alt="" className="w-36 h-24 rounded-xl" />
              {/* Start Text */}
              <div className="mr-3 mt-3">
                <img src={logo} alt="" className="w-16" />
                <div className="font-iran text-white text-lg font-medium mt-1">
                  حرکات اصلاحی
                </div>
                <div className="float-right mt-1 text-white font-iran font-light text-xs">
                  یک بازیکن &#x2022; شش پاد
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/Detail/101">
          <div className="w-11/12 h-24 mt-4">
            <div className="flex">
              {/* Folder Shape */}
              <img src={pic} alt="" className="w-36 h-24 rounded-xl" />
              {/* Start Text */}
              <div className="mr-3 mt-3">
                <img src={logo} alt="" className="w-16" />
                <div className="font-iran text-white text-lg font-medium mt-1">
                  حرکات اصلاحی
                </div>
                <div className="float-right mt-1 text-white font-iran font-light text-xs">
                  یک بازیکن &#x2022; شش پاد
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
