import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";
import { IoPause, IoPlay } from "react-icons/io5";
import { HiArrowLeft } from "react-icons/hi";

export default function TimerPage() {
  const [timeControl, setTimeControl] = useState(Date.now() + 8000);
  const renderer = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) {
      return (
        <div className="text-cyan-400 text-2xl font-light text-center">
          !Down
        </div>
      );
    } else {
      return (
        <div className="font-light text-cyan-400 text-3xl block text-center">
          {hours}:{minutes}:{seconds}
        </div>
      );
    }
  };

  const renderer2 = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) {
      return <div className="text-gray-400 font-xs">-</div>;
    } else {
      return (
        <div className="text-base text-gray-300 font-semibold">
          {hours}:{minutes}:{seconds}
        </div>
      );
    }
  };

  const clockRef = useRef();
  const clockRef2 = useRef();
  const handleStart = () => {
    clockRef.current.start();
    clockRef2.current.start();
  };
  const handlePause = () => {
    clockRef.current.pause();
    clockRef2.current.pause();
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden backgroundColor1">
      <div className="flex justify-between mt-5 mx-6">
        <div className="font-iran font-bold text-xl text-white">
          حرکت قدرتی کششی
          <div className="text-white">
            <Countdown
              zeroPadTime={2}
              date={timeControl}
              renderer={renderer2}
              ref={clockRef2}
            />
          </div>
        </div>

        <Link to="/Home">
          <HiArrowLeft className="w-6 h-6 text-gray-500" />
        </Link>
      </div>
      <div className="flex justify-center mt-14">
        <div className="w-48 h-48 bg-blue-800 rounded-full flex justify-center items-center">
          <div className="w-44 h-44 bg-blue-900 rounded-full">
            <div className="text-base font-medium text-gray-400 text-center mt-10">
              Cycle 3/<span className="text-xs">4</span>
            </div>

            <Countdown
              zeroPadTime={2}
              date={timeControl}
              renderer={renderer}
              ref={clockRef}
            />

            <div className="flex justify-center">
              <div
                onClick={handleStart}
                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center ml-0.5 mt-2 cursor-pointer"
              >
                <IoPlay className="w-5 h-5 text-cyan-400" />
              </div>
              <div
                onClick={handlePause}
                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center mt-2 cursor-pointer"
              >
                <IoPause className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
