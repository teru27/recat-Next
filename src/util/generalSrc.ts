import { useLayoutEffect, useState } from "react";

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
 * 二次元配列内の値を足して
 * @param index 正方形の配列のインデック数
 * @param stratNum 一番最初の配列の値
 * @param sumNumber 増やす値（デフォルト1）
 * @returns
 */
export function sum2Array(
  index: number,
  stratNum: number,
  sumNumber?: number
): number[][] {
  const numberArr = dimensional2Array(index, true) as number[][];
  let count = 0;
  for (var i = 0; i < numberArr.length; i++) {
    for (var j = 0; j < numberArr[i].length; j++) {
      numberArr[i][j] = stratNum + count;
      count = sumNumber ? count + sumNumber : count + 1;
    }
  }
  return numberArr;
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
 * ラジアンを角度に変換
 * @param radian ラジアン
 * @returns 角度
 */
export function Angle2radian(radian: number) {
  return radian * (180 / Math.PI);
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
/**
 * 引数と同じ長さの配列の中心座標の配列作成
 * @param array 中心座標を作りたい配列
 * @param x xの中心座標
 * @param y yの中心座標
 * @returns 中心座標の配列
 */
export function centerArrayCalc(
  array: string[][] | number[][],
  x: number,
  y: number
): string[][] {
  const xLength = array.length;
  const yLength = array[0].length;
  let board: string[][] = dimensional2Array(
    xLength,
    false,
    yLength
  ) as string[][];

  for (var i = 0; i < xLength; i++) {
    for (var j = 0; j < yLength; j++) {
      const xCalc = y >= j ? j - y : Math.abs(j - y);
      const yCalc = i >= x ? -1 * (i - x) : Math.abs(i - x);
      board[i][j] = `${xCalc},${yCalc}`;
    }
  }
  return board;
}

/**
 * 配列の比較
 * @param array1 比較したい配列1
 * @param array2 比較したい配列2
 * @returns 比較結果
 */
export function isArrayEqual(
  array1: string[][] | number[][],
  array2: string[][] | number[][]
): boolean {
  return array1 && array2 && array1.toString() === array1.toString();
}

/**
 * 2点のxy座標から一次関数と角度と距離を求める
 * @param x1 x座標
 * @param y1 y座標
 * @param x2 x座標
 * @param y2 y座標
 * @returns @param distance 2点のxy座標の距離
 * @returns @param angle 一次関数の角度
 */
export function linearFunction(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): { distance: number; angle: number; a: number; b: number } | null {
  // xy座標が同じ場合
  if (x1 === x2 && y1 === y2) {
    return null;
  }
  return {
    distance: Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2),
    angle: Angle2radian(Math.atan2(y2 - y1, x2 - x1)),
    a: isFinite((y2 - y1) / (x2 - x1)) ? (y2 - y1) / (x2 - x1) : 0,
    b: isFinite((x2 * y1 - x1 * y2) / (x2 - x1))
      ? (x2 * y1 - x1 * y2) / (x2 - x1)
      : 0,
  };
}
/**
 * 2つの一次関数から交点を求める
 * @param a1
 * @param b1
 * @param a2
 * @param b2
 * @returns
 */
export function intersectionCoordinate(
  a1: number,
  b1: number,
  a2: number,
  b2: number
) {
  const x = isFinite((b2 - b1) / (a1 - a2)) ? (b2 - b1) / (a1 - a2) : null;
  return {
    x: x,
    y: x === null ? null : a1 * x + b1,
  };
}
/**
 * 連想配列内のソート（numberのみ対応）
 * @param dictionaryArr 連想配列
 * @param key 連想配列のkey
 * @param Descending 降順（デフォルト昇順）
 * @returns
 */
export function dictionaryArraySortNum(
  dictionaryArr: {}[],
  key: any,
  Descending?: boolean
): {}[] {
  if (Descending) {
    return dictionaryArr.sort(
      (a: any, b: any) => (b[key] as number) - (a[key] as number)
    );
  }

  return dictionaryArr.sort(
    (a: any, b: any) => (a[key] as number) - (b[key] as number)
  );
}

export function bogoSort(arr: number[], anserArr: number[]) {
  let completion = false;
  let count = 0;

  while (!completion) {
    let index = arr.length;

    while (index) {
      var i = Math.floor(Math.random() * index);
      var str = arr[--index];
      arr[index] = arr[i];
      arr[i] = str;
    }
    console.log(arr);
    if (JSON.stringify(arr) == JSON.stringify(anserArr)) {
      completion = true;
    } else {
      count++;
    }
  }
  console.log(count);
  return;
}

export const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getRandomNum = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 配列加算
 * @param index 配列の数
 * @param minNumber 最小値
 * @returns
 */
export function createSumNumberArray(
  index: number,
  minNumber?: number
): number[] {
  let board: number[] = new Array();

  const defaultNumber = minNumber ? minNumber - 1 : 0;
  for (var i = defaultNumber; i < index; i++) {
    board[i] = i + 1;
  }
  return board;
}

/**
 * 配列そのまま
 * @param index 配列の数
 * @param number 配列に入れる値
 * @returns
 */
export function createNumberArray(index: number, number: number): number[] {
  let board: number[] = new Array();

  for (var i = 0; i < index; i++) {
    board[i] = number;
  }
  return board;
}
