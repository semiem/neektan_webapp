import {Link, useLocation} from "react-router-dom";
// import {useEffect, useRef, useState} from "@types/react";
import Countdown from "react-countdown";
import {HiArrowLeft} from "react-icons/hi";
import {IoPause, IoPlay} from "react-icons/io5";
import {useCallback, useEffect, useRef, useState} from "react";
import useWebSocket, {ReadyState} from "react-use-websocket";


const Timer = () => {
    const location = useLocation()
    // let {counter} = location.state
    // if (counter === undefined)
    let counter = 3
    console.log("counter")
    console.log(counter)


    // return <></>
    return TimerPage(counter);
};

export default Timer;


function TimerPage(counter) {


    // const [readyState, setReadyState] = useState(true);
    const [cycleState, setCycleState] = useState(0);
    const [statusMessage, setStatusMessage] = useState("آماده اتصال");
    let totCycle = 0
    const [ws, setWs] = useState();
    const [socketUrl, setSocketUrl] = useState('ws://192.168.66.66:81');
    const [messageHistory, setMessageHistory] = useState([]);
    const {sendMessage, lastMessage, readyState} = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);


    const connectionStatus = {
        [ReadyState.CONNECTING]: 'در حال اتصال',
        [ReadyState.OPEN]: 'متصل',
        [ReadyState.CLOSING]: 'در حال قطع اتصال',
        [ReadyState.CLOSED]: 'قطع',
        [ReadyState.UNINSTANTIATED]: 'خطا در اتصال',
    }[readyState];

    useEffect(() => {
        // setWs(new WebSocket(""))
        console.log("TESTT")
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

                (function myLoop(i) {
                    setCycleState(i)
                    console.log("Counter: " + counter)
                    setTimeout(function () {
                        const tData = {
                            event: "Move That Cone",
                            data: {
                                "p1": i % 3 == 0 ? true : false,
                                "p2": i % 3 == 1 ? true : false,
                                "p3": i % 3 == 2 ? true : false
                            },
                        };
                        sendMessage(JSON.stringify(tData));
                        if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
                    }, 2000)
                })(3 * counter);
                return

            }
        }
    }

    const [timeControl] = useState(Date.now() + (counter * 10000));
    //setTimeControl
    const renderer = ({formatted: {hours, minutes, seconds}, completed}) => {
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

    const clockRef = useRef();

    const handleStart = () => {
        console.log("START Counter")
        if (readyState)
            clockRef.current.start();
    };
    const handlePause = () => {
        if (readyState)
            clockRef.current.pause();
    };


    return (
        <div className="h-screen w-full sm:w-4/12 mx-auto overflow-x-hidden backgroundColor1">
            <div className="flex justify-between mt-5 mx-6">
                <div className="font-iran font-bold text-xl text-white">
                    حرکت قدرتی کششی
                    <div className="text-green-400">
                        {connectionStatus}
                        {/*<Countdown*/}
                        {/*    zeroPadTime={2}*/}
                        {/*    date={timeControl}*/}
                        {/*    renderer={renderer2}*/}
                        {/*    ref={clockRef2}*/}
                        {/*/>*/}
                    </div>
                </div>

                <Link to="/Home">
                    <HiArrowLeft className="w-6 h-6 text-gray-500"/>
                </Link>
            </div>
            <div className="flex justify-center mt-14">
                <div className="w-48 h-48 bg-blue-800 rounded-full flex justify-center items-center">
                    <div className="w-44 h-44 bg-blue-900 rounded-full">
                        <div className="text-base font-medium text-gray-400 text-center mt-10">
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
                                onClick={handleStart}
                                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center ml-0.5 mt-2 cursor-pointer"
                            >
                                <IoPlay className="w-5 h-5 text-cyan-400"/>
                            </div>
                            <div
                                onClick={handlePause}
                                className="w-10 h-10 bg-blue-950 rounded-full flex justify-center items-center mt-2 cursor-pointer"
                            >
                                <IoPause className="w-5 h-5 text-cyan-400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
