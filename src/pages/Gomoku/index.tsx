import react, { useEffect, useState } from "react";
import styles from "./gomoku.module.scss";
import {
  createNumberArray,
  createSumNumberArray,
  dimensional2Array,
  useWindowSize,
} from "@util/generalSrc";

const borderLinePixel = 2;
const boxSize = 600;
const defaultTileNumber = 3;

export default function App() {
  const [width, height] = useWindowSize();

  const [number, setNumber] = useState<number>(defaultTileNumber);

  const tileLsit = createSumNumberArray(10, defaultTileNumber);

  const [nowPlayer, setNowPlayer] = useState<1 | 2>(1);

  const [squaresList, setSquaresList] = useState<number[][]>([]);
  const [changeSquares, setChangeSquares] = useState<number[][]>([]);
  const [reStart, setReStart] = useState<boolean>(false);

  const [gameStets, setGameStets] = useState<"start" | "now" | "end">("start");

  const clickEvent = (i: number, j: number, square: number) => {
    if (squaresList[i][j] != 0) {
      return;
    }
    squaresList[i][j] = nowPlayer;

    setChangeSquares(squaresList);
  };

  //全て埋まったか判定
  const allFilled = () => {
    // 各配列の判定結果
    const a = squaresList.map((squares) => squares.includes(0));
    const stets: "now" | "end" = a.some((value) => value) ? "now" : "end";
    setGameStets(stets);
  };

  const reStartEvent = () => {
    setNowPlayer(1);
    setGameStets("now");
    setReStart((pev) => !pev);
  };

  // 一列揃ったか判定
  const beAllPresent = () => {
    const pattern = createNumberArray(number, nowPlayer);

    console.log(pattern);
    const winPlayer = squaresList.includes(pattern);

    if (winPlayer) {
      console.log(nowPlayer);
      return;
    }
    allFilled();

    // どこにおく？要検討
    const nextPlayer = nowPlayer === 1 ? 2 : 1;
    setNowPlayer(nextPlayer);
  };

  useEffect(() => {
    setSquaresList(dimensional2Array(number, true) as number[][]);
  }, [number, reStart]);

  useEffect(() => {
    if (changeSquares.length != 0) {
      setSquaresList(changeSquares);
      setChangeSquares([]);
      beAllPresent();
    }
  }, [changeSquares]);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.text}>
          {gameStets == "start" && (
            <div>
              {`マスをクリックしてスタート`}
              <br />
              {`Player${nowPlayer}のターン`}
            </div>
          )}
          {gameStets == "now" && <div>{`Player${nowPlayer}のターン`}</div>}
          {gameStets == "end" && (
            <div>
              {`終了`}
              <br />
              <button onClick={() => reStartEvent()}>もう一度</button>
            </div>
          )}
        </div>
      </div>

      <div
        className={styles.squaresBox}
        style={{
          height: `${number * 100}px`,
          width: `${number * 100}px`,
        }}
      >
        {squaresList &&
          squaresList.map((squares, i) => (
            <div className={styles.squares} key={`key_${i}`}>
              {squares.map((square, j) => {
                // component maybe...
                const a = (): string => {
                  switch (square) {
                    case 1:
                      return "○";
                    case 2:
                      return "×";
                    default:
                      return "";
                  }
                };

                return (
                  <div
                    key={`key_${j}`}
                    className={styles.square}
                    onClick={() => clickEvent(i, j, square)}
                  >
                    <div className={styles.squareText}>{a()}</div>
                  </div>
                );
              })}
            </div>
          ))}
      </div>

      <div className={styles.box}>
        <div className={styles.text}>
          <select
            disabled={gameStets != "start"}
            onChange={(e) => setNumber(Number(e.target.value))}
            defaultValue={number}
          >
            {tileLsit.map((tile) => (
              <option value={tile} key={`key_${tile}`}>
                {tile}
              </option>
            ))}
          </select>
          <div>Window width : {width}</div>
          <div>Window height : {height}</div>
        </div>
      </div>
    </div>
  );
}
