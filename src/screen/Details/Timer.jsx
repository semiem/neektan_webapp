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
            console.log(lastMessage.data)
            let res = JSON.parse(lastMessage.data);
            // if (res.statusConnection != undefined){
            //     if (res.statusConnection == true){
            //         setConfigSet(true);
            //     }
            // }
            // else
            if (res.statusConfig != undefined) {
                if (res.statusConfig == true) {
                    setConfigSet(true);
                    console.log("ConfigResponseSet");
                }
            }
            // setConfigSet(true);

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
                console.log("READY")
                if (configSet) {
                    console.log("StartLoop");
                    (function myLoop(i) {
                        setCycleState(i);
                        console.log("Counter: " + counter);
                        setTimeout(function () {
                            const tData = {
                                event: "Play",
                                data: [
                                    {state: i % 3 == 0 ? true : false},
                                    {state: i % 3 == 1 ? true : false},
                                    {state: i % 3 == 2 ? true : false},
                                ],
                            };
                            sendMessage(JSON.stringify(tData));
                            if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
                        }, 2000);
                    })(3 * counter);

                    const endData = {
                        event: "End"
                    };
                    sendMessage(JSON.stringify(endData));
                    return;
                } else {
                    console.log("ConfigNotSet")
                    if (readyState != 1) {
                        console.log("Still Conncting");
                    } else {
                        const tData = {
                            event: "Setup",
                            Setup: {
                                gamer: 1,
                                timeout: 2,
                                logger_n: 3,
                                ledTimeout: 5,
                                ColorsNumbers: [
                                    {'number': 1, "color": "red"},
                                    {'number': 2, "color": "green"},
                                    {'number': 3, "color": "blue"}
                                ]
                            },
                        };
                        sendMessage(JSON.stringify(tData));
                        // setConfigSet(true);
                        console.log("ConfigSent");

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
        console.log("ClickStart")
        if (readyState) {
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
        console.log("ClickPause")
        if (readyState) {
            setIsPlay(false);
            clockRef.current.pause();
        }
    };
    const setBtnColor = (number) => {
        if (readyState && configSet) {
            let color = "white";
            switch (number) {
                case 1:
                    color = "red"
                    break
                case 2:
                    color = "green"
                    break
                case 3:
                    color = "blue"
                    break
                default:
                    color = "white"
            }
            const tData = {
                event: "ShowColorNumber",
                color: {
                    number: number,
                    color: color,

                },
            };
            sendMessage(JSON.stringify(tData));
            console.log("ShowColorNumber " + number + " => " + color);
        }
    };

    return (
        <div
            className="h-screen w-full sm:w-4/12 flex flex-col justify-between items-center gap-10 mx-auto overflow-x-hidden backgroundColor1">
            <div className="w-full flex justify-between mt-5 mx-6 h-16 px-4">
                <div className="font-iran font-bold text-xl text-white">
                    حرکت قدرتی کششی
                    <div className="text-green-400 text-sm">{connectionStatus}</div>
                    <div className="text-green-400 text-sm">{configSet ? "آماده به کار" : "در حال ارسال تنظیمات"}</div>
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
                        <span onClick={() => setBtnColor(3)}
                              className="w-12 h-12 bg-blue-500 rounded-full mx-1 border-[1px] border-[#15233c] text-center font-bold text-xl">3</span>
                        <span onClick={() => setBtnColor(2)}
                              className="w-12 h-12 bg-green-500 rounded-full mx-1 border-[1ظpx] border-[#15233c] text-center font-bold text-xl">2</span>
                        <span onClick={() => setBtnColor(1)}
                              className="w-12 h-12 bg-red-500 rounded-full mx-1	 border-[1px] border-[#15233c] text-center font-bold text-xl">1</span>
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
