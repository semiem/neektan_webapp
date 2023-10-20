import { GoHomeFill } from "react-icons/go";
import { LuTimer } from "react-icons/lu";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

import { useLocation, Link, Outlet } from "react-router-dom";

export default function PanelLayout() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <Outlet />
      <div className="w-full sm:w-4/12 mx-auto">
        <div className="fixed bottom-0 w-full sm:w-4/12 h-14 rounded-t-[2rem] bg-menu-gradient z-50">
          <div className="flex justify-around mt-3">
            <Link to="/Settings">
              <IoIosSettings
                className={
                  pathname.includes("/Settings")
                    ? "w-8 h-8 text-sky-500 cursor-pointer"
                    : "w-8 h-8 text-gray-500 cursor-pointer"
                }
              />
            </Link>
            <Link to="/Analytics">
              <MdOutlineInsertChartOutlined
                className={
                  pathname.includes("/Analytics")
                    ? "w-8 h-8 text-sky-500 cursor-pointer"
                    : "w-8 h-8 text-gray-500 cursor-pointer"
                }
              />
            </Link>
            <Link to="/PerformanceTest">
              <LuTimer
                className={
                  pathname.includes("/PerformanceTest")
                    ? "w-8 h-8 text-sky-500 cursor-pointer"
                    : "w-8 h-8 text-gray-500 cursor-pointer"
                }
              />
            </Link>
            <Link to="/Home">
              <GoHomeFill
                className={
                  pathname.includes("/Home")
                    ? "w-8 h-8 text-sky-500 cursor-pointer"
                    : "w-8 h-8 text-gray-500 cursor-pointer"
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
