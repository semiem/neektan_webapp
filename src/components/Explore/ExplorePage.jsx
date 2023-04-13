import { Link } from "react-router-dom";
import { HiArrowLeft, HiSearch } from "react-icons/hi";
import logo from "../../assets/images/127.png";
import { useState } from "react";
import ActivitiesPage from "./ActivitiesPage";
import CollectionsPage from "./CollectionsPage";

export default function ExplorePage() {
  const tabs = [{ name: "فعالیت ها" }, { name: "دسته بندی" }];
  const [label, setLabel] = useState(tabs[0].name);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      className="h-screen w-screen overflow-x-hidden"
      style={{
        background: "#132037",
      }}
    >
      <div>
        <div className="flex justify-between mt-5 mx-6">
          <img src={logo} alt="" className="w-10" />
          <div className="font-iran font-bold text-xl text-white">کاوش</div>
          <Link to="/">
            <HiArrowLeft className="w-6 h-6 text-white" />
          </Link>
        </div>
        {/* Start Tab */}
        <div>
          <div>
            <div>
              <div className="flex justify-center mt-4">
                {tabs.map((tab) => (
                  <div
                    onClick={() => setLabel(tab.name)}
                    key={tab.name}
                    className={classNames(
                      label === tab.name
                        ? "border-sky-500 text-white bg-blue-950"
                        : "border-transparent text-white opacity-30",
                      "group items-center py-4 px-14 border-b-2 font-medium text-sm font-iran cursor-pointer"
                    )}
                  >
                    <span>{tab.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab */}
      {/* Start Search */}
      <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
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
      {/* Start Details */}
      <div className="mb-4">
        {label.includes(tabs[0].name) ? (
          <ActivitiesPage />
        ) : (
          <CollectionsPage />
        )}
      </div>
    </div>
  );
}
