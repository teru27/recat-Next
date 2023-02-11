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
  for (var i = 0; i < index; i++) {
    board[i] = new Array();
    for (var j = 0; j < indexRow; j++) {
      board[i][j] = arrNum ? 0 : "0";
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
