import react, { useEffect, useState } from "react";
import styles from "./demo.module.scss";
import { useWindowSize } from "@util/generalSrc";

export default function App() {
  const borderLinePixel = 2;
  const boxSize = 600;
  const [width, height] = useWindowSize();

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

    const clientX = event.clientX - (Math.floor((width - boxSize) / 2) + 1);
    const clientY = event.clientY - 1;
    if (clientX > boxSize || clientY > boxSize || clientX < 0) {
      console.log("aaa");
      return;
    }
    setX_Coordinate(clientX);
    setY_Coordinate(clientY);
  };

  return (
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
          onMouseEnter={() => setHoverFlag(true)}
          onMouseLeave={() => setHoverFlag(false)}
        ></div>
      </div>
      <div className={styles.box}>
        <div className={styles.text}>
          <div>Window width : {width}</div>
          <div>Window height : {height}</div>
          <div>X座標 : {X_Coordinate}</div>
          <div>Y座標 : {Y_Coordinate}</div>
        </div>
      </div>
    </div>
  );
}
