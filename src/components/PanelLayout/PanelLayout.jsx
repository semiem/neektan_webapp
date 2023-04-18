import { HiHome } from "react-icons/hi";
import { RxLapTimer } from "react-icons/rx";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import { SlSettings } from "react-icons/sl";

import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function PanelLayout() {
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
              <SlSettings className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/Analytics">
              <MdOutlineInsertChartOutlined className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/PerformanceTest">
              <RxLapTimer className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
            <Link to="/">
              <HiHome className="w-8 h-8 text-sky-400 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
