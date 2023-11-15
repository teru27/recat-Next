import react, { useEffect, useState } from "react";
import styles from "./demoClick.module.scss";
import { useWindowSize } from "@util/generalSrc";

const borderLinePixel = 2;
const boxSize = 600;
const heightStopwatch = 100;
const circleSize = 100;

type Coordinate = { x: number; y: number };

export default function App() {
  const [width, height] = useWindowSize();

  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  const [hoverFlag, setHoverFlag] = useState<boolean>(false);

  const [X_Coordinate, setX_Coordinate] = useState<number>(0);
  const [Y_Coordinate, setY_Coordinate] = useState<number>(0);

  const click = (
    event: react.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (width < boxSize || height < boxSize) {
      console.log(width, height);
      return;
    }

    const clientX =
      event.clientX - (Math.floor((width - boxSize) / 2) + borderLinePixel);
    const clientY = event.clientY - borderLinePixel - heightStopwatch;

    if (clientX > boxSize || clientY > boxSize || clientX < 0) {
      console.log("no click2");
      return;
    }

    const a = coordinates.length * circleSize;

    setCoordinates([...coordinates, { x: clientX, y: clientY - a }]);
    setX_Coordinate(clientX);
    setY_Coordinate(clientY);
    console.log(coordinates);
  };

  return (
    <div>
      <div
        style={{
          height: `${heightStopwatch}px`,
        }}
      >
        a
      </div>
      <div>
        <div
          className={styles.box}
          style={{
            height: `${boxSize + borderLinePixel * 2}px`,
            width: `${boxSize + borderLinePixel * 2}px`,
            border: `solid ${borderLinePixel}px #000000`,
          }}
        >
          <div
            style={{
              height: `${boxSize}px`,
              width: `${boxSize}px`,
            }}
            onClick={(e) => click(e)}
          >
            {coordinates.map((coordinate, index) => (
              <div
                className={styles.circle}
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  top: `${coordinate.y - circleSize / 2}px`,
                  left: `${coordinate.x - circleSize / 2}px`,
                }}
                key={`key_${index}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.text}>
          <div>Window width : {width}</div>
          <div>Window height : {height}</div>
          <div>X座標 : {X_Coordinate}</div>
          <div>Y座標 : {Y_Coordinate}</div>
          {coordinates.length > 0 && (
            <button onClick={() => setCoordinates([])}>reset</button>
          )}
        </div>
      </div>
    </div>
  );
}
