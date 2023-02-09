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
