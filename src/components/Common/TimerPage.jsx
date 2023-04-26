import Countdown from "react-countdown";
import { useRef, useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";

export default function TimerPage() {
  const [controlPause, setControlPause] = useState(false);

  const renderer = ({ formatted: { hours, minutes, seconds }, completed }) => {
    if (completed) {
      // Render a completed state
      return "Down";
    } else {
      // Render a countdown
      return (
        <div className="text-white font-semibold text-3xl block text-center">
          {hours}:{minutes}:{seconds}
        </div>
      );
    }
  };

  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const handlePause = () => clockRef.current.pause();

  return (
    <div className="h-screen w-screen overflow-x-hidden backgroundColor1">
      <div className="flex justify-center mt-5">
        <div className="w-48 h-48 bg-blue-800 rounded-full flex justify-center items-center">
          <div className="w-44 h-44 bg-blue-900 rounded-full">
            <div className="text-white font-sm text-center mt-11">
              Cycle 3/4
            </div>
            <div>
              <Countdown
                zeroPadTime={40}
                date={Date.now() + 120000}
                renderer={renderer}
                ref={clockRef}
              />
            </div>
            <div className="flex justify-center">
              <div
                onClick={handleStart}
                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center ml-0.5 mt-2 cursor-pointer"
              >
                <IoPlay className="w-5 h-5 text-white " />
              </div>
              <div
                onClick={handlePause}
                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center mt-2 cursor-pointer"
              >
                <IoPause className="w-5 h-5 text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
