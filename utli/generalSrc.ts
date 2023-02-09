/**
 * 文字列の正方形の二次元配列
 * @param index 配列の数
 * @returns
 */
export function makeStr2Array(index: number): string[][] {
  let board: string[][] = new Array();
  for (var i = 0; i < index; i++) {
    board[i] = new Array();
    for (var j = 0; j < index; j++) {
      board[i][j] = "0";
    }
  }
  return board;
}

/**
 * 数値の正方形の二次元配列
 * @param index  配列の数
 * @returns
 */
export function makeNum2Array(index: number): number[][] {
  let board: number[][] = new Array();
  for (var i = 0; i < index; i++) {
    board[i] = new Array();
    for (var j = 0; j < index; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}
