/**
 * 二次元配列
 * @param index 配列の数
 * @param index2 配列内の配列の数
 * @param arrNum
 * @returns
 */
export function dimensional2Array(
  index: number,
  arrNum?: boolean,
  index2?: number
): string[][] | number[][] {
  let board: string[][] | number[][] = new Array();
  const indexRow = index2 !== undefined ? index2 : index;
  const numOrStr = arrNum ? 0 : "0";
  for (var i = 0; i < index; i++) {
    board[i] = new Array();
    for (var j = 0; j < indexRow; j++) {
      board[i][j] = numOrStr;
    }
  }
  return board;
}

/**
 * 回転行列
 * @param x x座標
 * @param y y座標
 * @param angle 角度
 * @returns 回転後のxy座標
 */
export function rotationMatrix(
  x: number,
  y: number,
  angle: number
): { X: number; Y: number } {
  const radian = radian2Angle(angle); // 角度をラジアンに変換
  const sin = Math.round(Math.sin(radian));
  const cos = Math.round(Math.cos(radian));

  return {
    X: x * cos + y * -sin,
    Y: x * sin + y * cos,
  };
}

/**
 * 角度をラジアンに変換
 * @param angle 角度
 * @returns ラジアン
 */
export function radian2Angle(angle: number) {
  return angle * (Math.PI / 180);
}

/**
 * 正方形の二次元配列の回転
 * @param array 配列
 * @param direction 回転方向
 * @returns
 */
export function rotate2Array(
  array: string[][] | number[][],
  direction: "l" | "r"
): string[][] | number[][] {
  const xLength = array.length;
  const yLength = array[0].length;
  let rotate2Array: string[][] | number[][] = dimensional2Array(
    yLength,
    false,
    xLength
  );
  switch (direction) {
    // 左回転
    case "l":
      array.map((line, i) => {
        line.map((cell, j) => {
          rotate2Array[array.length - 1 - i][array.length - 1 - j] =
            array[array.length - 1 - j][i];
        });
      });
      break;
    //右回転
    case "r":
      array.map((line, i) => {
        return line.map((cell, j) => {
          return (rotate2Array[array.length - 1 - j][array.length - 1 - i] =
            array[i][array.length - 1 - j]);
        });
      });
      break;
  }

  return rotate2Array;
}
