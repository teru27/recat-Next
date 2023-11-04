import React, { FC, useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

type Stopwatch = {
  days: number;
  hours: number;
  minutes: number;
  time: number;
  startEvent?: () => void;
  resetEvent?: () => void;
};

export const Stopwatch: FC<Stopwatch> = (props) => {
  const { days, hours, minutes, time, startEvent, resetEvent } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "50px" }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{time}</span>
      </div>
      {startEvent && <button onClick={startEvent}>Start</button>}
      {resetEvent && <button onClick={resetEvent}>Reset</button>}
    </div>
  );
};
