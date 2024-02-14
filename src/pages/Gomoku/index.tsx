import react, { useEffect, useState } from "react";
import styles from "./gomoku.module.scss";
import {
  createSumNumberArray,
  dimensional2Array,
  transpose,
} from "@util/generalSrc";
import { GomokuRow } from "@component/Gomoku/GomokuRo";

const defaultTileNumber = 4;
const defaultCountNum = 3;

export default function App() {
  const [number, setNumber] = useState<number>(defaultTileNumber);
  const [countNum, setCountNum] = useState<number>(defaultCountNum);
  const tileList = createSumNumberArray(10, defaultTileNumber);
  const [nowPlayer, setNowPlayer] = useState<1 | 2>(1);
  const [squaresList, setSquaresList] = useState<number[][]>([]);
  const [changeSquares, setChangeSquares] = useState<number[][]>([]);
  const [reStart, setReStart] = useState<boolean>(false);
  const [gameStets, setGameStets] = useState<"start" | "now" | "end" | "draw">(
    "start"
  );

  // クリック判定
  const clickEvent = (i: number, j: number, square: number) => {
    if (gameStets == "end") {
      return;
    }

    if (gameStets == "start") {
      setGameStets("now");
    }

    if (squaresList[i][j] != 0) {
      return;
    }
    // タイルの更新
    squaresList[i][j] = nowPlayer;
    setChangeSquares(squaresList);
  };

  //全て埋まったか判定
  const allFilled = () => {
    // 各配列の判定結果(0が含まれているか)
    const filled: boolean[] = squaresList.map((squares) => squares.includes(0));

    //全て埋まったか判定 埋まった場合:true
    return !filled.some((value) => value);
  };

  // リセット処理
  const reStartEvent = () => {
    setNowPlayer(1);
    setGameStets("now");
    setReStart((pev) => !pev);
  };

  // 縦横の判定
  const warpOrWeftProcess = (squaresList: number[][]) => {
    return squaresList.map((squares) => {
      let count = 0;
      squares.map((square: number) => {
        if (count == countNum) {
          return;
        }
        if (square == nowPlayer) {
          count++;
        } else {
          count = 0;
        }
      });

      if (count == countNum) {
        return true;
      }
      return false;
    });
  };
  // 左上からの右下の判定
  const upLeftProcess = (squaresList: number[][]) => {
    return squaresList.map((squares, i) => {
      let count1 = 0;
      let count2 = 0;
      squares.map((_, j) => {
        if (i + j < squaresList.length) {
          if (count1 == countNum || count2 == countNum) {
            return;
          }

          if (
            squaresList[i + j][squaresList.length - (squaresList.length - j)] ==
            nowPlayer
          ) {
            count1++;
          } else {
            count1 = 0;
          }

          if (
            squaresList[squaresList.length - (squaresList.length - j)][i + j] ==
            nowPlayer
          ) {
            count2++;
          } else {
            count2 = 0;
          }
        }
      });

      if (count1 == countNum || count2 == countNum) {
        return true;
      }
      return false;
    });
  };

  // 左上からの右下の判定
  const upRightProcess = (squaresList: number[][]) => {
    let count1 = 0;
    let count2 = 0;

    return squaresList.map((squares, i) => {
      squares.map((_, j) => {
        if (squaresList.length - i - j - 1 >= 0) {
          if (count1 == countNum || count2 == countNum) {
            return;
          }

          if (
            squaresList[squaresList.length - (squaresList.length - j)][
              squaresList.length - i - j - 1
            ] == nowPlayer
          ) {
            count1++;
          } else {
            count1 = 0;
          }

          if (squaresList[j + i][squaresList.length - j - 1] == nowPlayer) {
            count2++;
          } else {
            count2 = 0;
          }
        }
      });

      if (count1 == countNum || count2 == countNum) {
        return true;
      }

      return false;
    });
  };

  // 一列揃ったか判定
  const beAllPresent = (): boolean => {
    console.clear();
    // squaresList.map((a) => console.log(a));
    // 横
    const weft = warpOrWeftProcess(squaresList);
    if (weft.some((value) => value)) {
      return true;
    }

    // 縦=>横に変換後、判定
    const warp = warpOrWeftProcess(transpose<number>(squaresList));
    if (warp.some((value) => value)) {
      return true;
    }

    // 左上から斜め
    const upLeft = upLeftProcess(squaresList);
    if (upLeft.some((value) => value)) {
      return true;
    }

    // 右上から斜め
    const upRight = upRightProcess(squaresList);
    if (upRight.some((value) => value)) {
      return true;
    }

    return false;
  };

  const changePlayer = () => {
    const nextPlayer = nowPlayer === 1 ? 2 : 1;
    setNowPlayer(nextPlayer);
  };

  // gameの処理
  const mainProcess = () => {
    // 表示内容の更新
    setSquaresList(changeSquares);
    // 更新内容のリセット
    setChangeSquares([]);

    // 勝敗判定
    if (beAllPresent()) {
      setGameStets("end");
      return;
    }

    // 引き分け判定
    if (allFilled()) {
      setGameStets("draw");
      return;
    }

    // 続行の場合、プレイヤー変更
    changePlayer();
  };

  // リセット処理
  useEffect(() => {
    setGameStets("start");
    setSquaresList(dimensional2Array(number, true) as number[][]);
  }, [number, reStart]);

  // タイルがクリックされた場合
  useEffect(() => {
    if (changeSquares.length != 0) {
      mainProcess();
    }
  }, [changeSquares]);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.text}>
          {gameStets == "start" && <div>{`Player${nowPlayer}のターン`}</div>}
          {gameStets == "now" && <div>{`Player${nowPlayer}のターン`}</div>}
          {(gameStets == "end" || gameStets == "draw") && (
            <div>
              {gameStets == "end" ? `Player${nowPlayer}の勝ち` : `引き分け`}
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
        <div className={gameStets != "now" ? styles.overlay : undefined}>
          {squaresList &&
            squaresList.map((squares, i) => (
              <div className={styles.squares} key={`key_${i}`}>
                <GomokuRow
                  indexI={i}
                  squares={squares}
                  clickEvent={clickEvent}
                />
              </div>
            ))}
        </div>
      </div>

      <div className={styles.box}>
        <div className={styles.text}>
          <select
            disabled={!(gameStets == "start" || gameStets == "end")}
            onChange={(e) => setNumber(Number(e.target.value))}
            defaultValue={number}
          >
            {tileList.map((tile) => (
              <option value={tile} key={`key_${tile}`}>
                {tile}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
