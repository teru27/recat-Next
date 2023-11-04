import React, { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const [defaultTime, setDefaultTime] = useState<number>(30);
  const [time, setTime] = useState<number>(defaultTime);

  useEffect(() => {
    console.log(time);
    if (time === 0) {
      pause();
      return;
    }
    setTime(defaultTime - seconds);
  }, [seconds]);

  const startEvent = () => {
    if (time === 0) {
      setTime(defaultTime);
      reset();
    }
    start();
  };

  const resetEvent = () => {
    setTime(defaultTime);
    reset();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "100px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{time}</span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={startEvent}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resetEvent}>Reset</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
