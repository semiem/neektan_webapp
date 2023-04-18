import { HiHome } from "react-icons/hi";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function PanelLayout() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <Outlet />
      <div>
        <div
          className="fixed bottom-0 w-full h-14 rounded-t-3xl z-50"
          style={{
            background:
              "linear-gradient(180deg, rgba(40,85,152,1) 0%, rgba(23,35,61,1) 65%, rgba(22,32,44,1) 80%)",
          }}
        >
          <div className="flex justify-around mt-3">
            <Link to="/Settings">
              <SlSettings
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
              <RxLapTimer
                className={
                  pathname.includes("/PerformanceTest")
                    ? "w-8 h-8 text-sky-500 cursor-pointer"
                    : "w-8 h-8 text-gray-500 cursor-pointer"
                }
              />
            </Link>
            <Link to="/">
              <HiHome
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
