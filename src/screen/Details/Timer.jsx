import {Link, useLocation} from "react-router-dom";
// import {useEffect, useRef, useState} from "@types/react";
import Countdown from "react-countdown";
import {HiArrowLeft} from "react-icons/hi";
import {IoPause, IoPlay} from "react-icons/io5";
import {useEffect, useRef, useState} from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";
import Chart from "./Chart";

const Timer = () => {
    const location = useLocation();
    // let {counter} = location.state
    // if (counter === undefined)
    let counter = 3;
    console.log("counter");
    console.log(counter);

    // return <></>
    return TimerPage(counter);
};

export default Timer;

function TimerPage(counter) {
    // const [readyState, setReadyState] = useState(true);
    const [isPlay, setIsPlay] = useState(false);
    const [cycleState, setCycleState] = useState(0);
    const [statusMessage, setStatusMessage] = useState("آماده اتصال");
    let totCycle = 0;
    const [ws, setWs] = useState();
    const [configSet, setConfigSet] = useState(false);
    const [socketUrl, setSocketUrl] = useState("ws://192.168.66.66:81");
    const [messageHistory, setMessageHistory] = useState([]);
    const {sendMessage, lastMessage, readyState} = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            let res = JSON.parse(lastMessage);
            if (res.setupStatus != undefined){
                if (res.setupStatus == true){
                    setConfigSet(true);
                }
            }

            // setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: "در حال اتصال",
        [ReadyState.OPEN]: "متصل",
        [ReadyState.CLOSING]: "در حال قطع اتصال",
        [ReadyState.CLOSED]: "قطع",
        [ReadyState.UNINSTANTIATED]: "خطا در اتصال",
    }[readyState];

    useEffect(() => {
        // setWs(new WebSocket(""))
        console.log("TESTT");
        // ws.onopen = (event) => {
        //     console.log(ws.readyState)
        //
        // };
    }, []);

    const testWebSocket = (data) => {
        // const ws = new WebSocket("ws://192.168.66.66:81");
        if (readyState != 1) {
            console.log("Still Conncting");
        } else {
            if (readyState) {
                if (configSet) {
                    console.log("StartLoop");
                    (function myLoop(i) {
                        setCycleState(i);
                        console.log("Counter: " + counter);
                        setTimeout(function () {
                            const tData = {
                                event: "Move That Cone",
                                data: [
                                    {state: i % 3 == 0 ? true : false},
                                    {state: i % 3 == 0 ? true : false},
                                    {state: i % 3 == 0 ? true : false},
                                ],
                            };
                            sendMessage(JSON.stringify(tData));
                            if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
                        }, 2000);
                    })(3 * counter);
                    return;
                } else {
                    if (readyState != 1) {
                        console.log("Still Conncting");
                    } else {
                        const tData = {
                            event: "Setup",
                            Setup: {
                                gamer: 1,
                                timeout: 2,
                                logger_n: 3,
                            },
                        };
                        sendMessage(JSON.stringify(tData));
                        // setConfigSet(true);
                        console.log("ConfigResponseSet");

                    }

                }
            }
        }
    };

    const [timeControl] = useState(Date.now() + counter * 10000);
    //setTimeControl
    const renderer = ({formatted: {hours, minutes, seconds}, completed}) => {
        if (completed) {
            return (
                <div className="text-[#4298fa] text-2xl font-light text-center">
                    !Down
                </div>
            );
        } else {
            return (
                <div className="font-light text-[#4298fa] text-3xl block text-center">
                    {hours}:{minutes}:{seconds}
                </div>
            );
        }
    };

    const clockRef = useRef();

    const handleStart = () => {
        if (!readyState) {
            if (configSet) {
                console.log("ConfigSet");
                testWebSocket();
                setIsPlay(true);
                clockRef.current.start();
            } else {
                console.log("ConfigNotSet");
                testWebSocket();

            }
        }
    };
    const handlePause = () => {
        if (readyState) {
            setIsPlay(false);
            clockRef.current.pause();
        }
    };

    return (
        <div
            className="h-screen w-full sm:w-4/12 flex flex-col justify-between items-center gap-10 mx-auto overflow-x-hidden backgroundColor1">
            <div className="w-full flex justify-between mt-5 mx-6 h-16 px-4">
                <div className="font-iran font-bold text-xl text-white">
                    حرکت قدرتی کششی
                    <div className="text-green-400 text-sm">{connectionStatus}</div>
                    <div className="text-green-400 text-sm">{configSet ? "آماده به کار" : ""}</div>
                </div>

                <Link to="/Home">
                    <HiArrowLeft className="w-6 h-6 text-gray-500"/>
                </Link>
            </div>
            <div
                className="w-48 h-48 min-h-[12rem] bg-timer-gradient rounded-full flex justify-center items-center ring-4 ring-gray-800 ring-offset-0">
                <div className="w-[11.5rem] h-[11.5rem] bg-[#15233c] rounded-full flex flex-col justify-center gap-3">
                    <div className="text-base font-medium text-gray-400 text-center">
                        Cycle {cycleState}/<span className="text-xs">{counter}</span>
                    </div>
                    <Countdown
                        autoStart={false}
                        zeroPadTime={2}
                        date={timeControl}
                        renderer={renderer}
                        ref={clockRef}
                    />
                    <div className="flex justify-center">
                        <div
                            onClick={isPlay ? handlePause : handleStart}
                            className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            {isPlay ? (
                                <IoPause className="w-5 h-5 text-cyan-400"/>
                            ) : (
                                <IoPlay className="w-5 h-5 text-cyan-400"/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full rounded-md bg-[#15233c] py-8 flex flex-col gap-8">
                <div className="flex justify-between items-center px-3">
                    <span className="text-violet-200 font-iran">رنگ ها</span>
                    <div className="flex">
                        <span className="w-6 h-6 bg-red-500 rounded-full border-[3px] border-[#15233c]"></span>
                        <span className="w-6 h-6 bg-green-500 rounded-full -mr-2 border-[3px] border-[#15233c]"></span>
                        <span className="w-6 h-6 bg-blue-500 rounded-full -mr-2 border-[3px] border-[#15233c]"></span>
                    </div>
                </div>
                <div className="w-full flex justify-around items-end gap-8">
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-white text-lg font-iran">1000</span>
                        <span className="text-white text-xs font-iran opacity-80 text-center">
              واکنش متوسط
            </span>
                    </div>
                    <div
                        className="flex w-28 h-[100px] -mb-3 flex-col items-center justify-center gap-1 rounded-xl bg-[#101a2c]">
            <span className="flex justify-start text-white font-iran text-2xl">
              7
            </span>
                        <span className="text-white text-xs font-iran opacity-80">
              بازدید
            </span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-white text-lg font-iran">8</span>
                        <span className="text-white text-xs font-iran opacity-80 text-center">
              ضربه منقضی شده
            </span>
                    </div>
                </div>
                <div>
          <span className="text-violet-200 font-iran mr-3">
            زمان واکنش <span className="text-xs">(میلی ثانیه)</span>
          </span>
                </div>
                <Chart/>
            </div>
        </div>
    );
}
