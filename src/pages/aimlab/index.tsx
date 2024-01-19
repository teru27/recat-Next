import react, { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";

import { useWindowSize, delay, getRandomNum } from "@util/generalSrc";
import { Stopwatch } from "@component/stopwatch";

import styles from "./aimlab.module.scss";

const borderLinePixel = 2;
const boxSize = 600;
const heightStopwatch = 100;

export default function App() {
  const [width, height] = useWindowSize();

  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });

  const [hoverFlag, setHoverFlag] = useState<boolean>(false);

  const [circleSize, setCircleSize] = useState<number>(80);
  const [X_Coordinate, setX_Coordinate] = useState<number>(0);
  const [Y_Coordinate, setY_Coordinate] = useState<number>(0);
  const [top_Coordinate, setTop_Coordinate] = useState<number>(0);
  const [left_Coordinate, setLeft_Coordinate] = useState<number>(0);

  const [clickCount, setClickCount] = useState<number>(0);
  const [hit, setHit] = useState<number>(0);

  const timerList = [10, 20, 30, 40, 50];

  const click = (
    event: react.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (width < boxSize || height < boxSize) {
      console.log("no click1");
      return;
    }

    console.log("X", event.clientX - heightStopwatch);
    console.log("y", event.clientY - heightStopwatch);
    const clientX =
      event.clientX - (Math.floor((width - boxSize) / 2) + borderLinePixel);
    const clientY = event.clientY - borderLinePixel - heightStopwatch;

    if (clientX > boxSize || clientY > boxSize || clientX < 0) {
      console.log("no click2");
      return;
    }

    setX_Coordinate(clientX);
    setY_Coordinate(clientY);
    if (!isRunning) return;
    setHit((pev) => pev + 1);
  };

  const [defaultTime, setDefaultTime] = useState<number>(30);
  const [time, setTime] = useState<number>(defaultTime);

  useEffect(() => {
    setTime(defaultTime);
  }, [defaultTime]);

  useEffect(() => {
    if (time === 0) {
      pause();
      return;
    }
    setTime(defaultTime - seconds);
  }, [seconds]);

  const startEvent = () => {
    if (time === 0) {
      setTime(defaultTime);
      setClickCount(0);
      setHit(0);
      reset();
    }
    start();
  };

  //
  useEffect(() => {
    setCircleSize(getRandomNum(30, 80));
  }, [X_Coordinate, Y_Coordinate]);

  useEffect(() => {
    const circleCoordinate = boxSize - circleSize;
    setTop_Coordinate(getRandomNum(0, circleCoordinate));
    setLeft_Coordinate(getRandomNum(0, circleCoordinate));
  }, [circleSize]);

  return (
    <div>
      <div
        style={{
          height: `${heightStopwatch}px`,
        }}
      >
        <Stopwatch
          {...{
            days,
            hours,
            minutes,
            time,
            isRunning,
          }}
        />
      </div>

      <div
        className={styles.box}
        style={{
          height: `${boxSize + borderLinePixel * 2}px`,
          width: `${boxSize + borderLinePixel * 2}px`,
          border: `solid ${borderLinePixel}px #000000`,
        }}
      >
        {isRunning ? (
          <div
            onClick={() => setClickCount((pev) => pev + 1)}
            style={{
              height: `${boxSize}px`,
              width: `${boxSize}px`,
            }}
            onMouseEnter={() => setHoverFlag(true)}
            onMouseLeave={() => setHoverFlag(false)}
          >
            <div
              className={styles.circle}
              style={{
                width: `${circleSize}px`,
                height: `${circleSize}px`,
                top: `${top_Coordinate}px`,
                left: `${left_Coordinate}px`,
              }}
              onClick={(e) => click(e)}
            ></div>
          </div>
        ) : (
          <div className={styles.overlay}>
            <div className={styles.startText} onClick={() => startEvent()}>
              {clickCount === 0 ? "Start" : "One more time?"}
            </div>
          </div>
        )}
      </div>

      <div className={styles.box}>
        <div className={styles.detailInfo}>
          <div>
            成功:{hit} ミス:{clickCount - hit} 成功率:
            {clickCount === 0 ? 0 : (hit / clickCount) * 100}
          </div>
          <div>Window width : {width}</div>
          <div>Window height : {height}</div>
          <div>X座標 : {X_Coordinate}</div>
          <div>Y座標 : {Y_Coordinate}</div>
          タイマー：
          <select
            disabled={isRunning}
            onChange={(e) => setDefaultTime(Number(e.target.value))}
            defaultValue={defaultTime}
          >
            {timerList.map((timer) => (
              <option value={timer}>{timer}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
