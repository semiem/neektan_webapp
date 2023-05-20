import "../../Common/Global.style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import Previews from "./ProfileImageUploader";
import pic from "../../../assets/images/131.jpg";

export default function ProfileEditPage() {
  const handleChange = () => {
    console.log(1);
  };

  return (
    <div className="h-screen w-full sm:w-4/12 mx-auto overflow-x-hidden backgroundColor1">
      {/* Top Menu */}
      <div className="fixed w-full sm:w-4/12 mx-auto h-16 backgroundColor1 z-50">
        <div className="flex justify-between items-center mt-5 mx-6">
          <button
            onClick={() => handleChange()}
            className="font-iran font-medium text-lg text-white"
          >
            Done
          </button>
          <div className="font-iran font-bold text-xl text-white">
            ویرایش پروفایل
          </div>
          <Link to="/MyProfile">
            <HiArrowLeft className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
      {/* Image Uploader */}
      <div className="mt-20">
        <Previews />
      </div>

      <div className="grid grid-cols-1 divide-y-2 divide-[#1c314c]">
        {/* Field #1 */}
        <div className="mb-5">
          <div className="grid grid-cols-2 mx-3">
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                نام
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
              />
            </div>
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                نام خانوادگی
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
              />
            </div>
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                نام نمایشی
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
              />
            </div>
          </div>
          <div className="mx-2 mt-5">
            <label
              for="base-input"
              className="block mb-2 mr-3 text-sm font-medium text-white font-iran"
            >
              تاریخ تولد
            </label>
            <div className="grid grid-cols-3 mx-2">
              <div className="mx-1">
                <input
                  type="text"
                  id="base-input"
                  className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
                />
              </div>
              <div className="mx-1">
                <input
                  type="text"
                  id="base-input"
                  className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
                />
              </div>
              <div className="mx-1">
                <input
                  type="text"
                  id="base-input"
                  className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Field #2 */}
        <div className="mb-5">
          <div className="grid grid-cols-2 mx-3">
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                قد
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
              />
            </div>
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                وزن
              </label>
              <input
                type="text"
                id="base-input"
                className="bg-white/10 border border-transparent focus:border-transparent font-iran text-white text-sm rounded-lg block w-full p-2.5 focus:ring-0"
              />
            </div>
            <div className="mx-2 mt-3">
              <label
                for="base-input"
                className="block mb-2 text-sm font-medium text-white font-iran"
              >
                جنسیت
              </label>
              <select
                id="base-input"
                class="bg-white/10 border font-iran  border-transparent text-white text-sm rounded-lg focus:ring-0 focus:border-transparent block w-full p-2.5"
              >
                <option selected>انتخاب</option>
                <option value="M">مرد</option>
                <option value="F">زن</option>
              </select>
            </div>
          </div>
        </div>
        {/* Field #3 */}
        <div className="mb-8">
          <div className="w-5/6 h-28 mx-auto mt-6 bg-[#1c314c] flex items-center cursor-pointer">
            <img src={pic} alt="" className="w-36 mr-2" />
            <div className="text-white font-iran mx-auto">وزنه برداری</div>
          </div>
        </div>
      </div>
    </div>
  );
}
