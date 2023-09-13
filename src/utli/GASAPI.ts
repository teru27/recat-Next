import { useQuery } from "@tanstack/react-query";
import { Status, Todo } from "../types/types";

const NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

const NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID;

const NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY;

type TODO = {
  todo: string;
  todoId: string;
  menberId: string;
  priority: string;
};

type Postparam = {};

const useFetch = (postparam: Postparam) => {};

export const getDataRequest = async (menberId: number): Promise<Todo[]> => {
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "getPrivateData",
    menberId: menberId,
  };

  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };

  let returnStr: Todo[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((res) => res.json())
    .then(
      (result: Todo[]) => {
        returnStr = result;
      },
      (error: Error) => {
        console.log(error);
      }
    );

  return returnStr;
};

// データの削除
export const Delete = (menberId: string, todoId: string) => {
  setFlag(false);
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "deleteData",
    menberId: menberId,
    id: todoId,
  };

  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };

  fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      setLoding(true);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// データのアップデート
export const Update = (menberId: string, todoId: string) => {
  setFlag(false);
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "UpDate",
    menberId: menberId,
    todoId: todoId,
    todo: "https://sakura-checker.jp/search/B0BP3SHG5Z/",
  };

  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };

  fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((response) => {
      console.log(response.ok);
      return response.json();
    })
    .then((data) => {
      setLoding(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Statusのアップデート
export const UpDateStatus = (menberId: string, id: string, status: Status) => {
  console.log("Click UpDateStatus");

  setFlag(false);
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "UpDateStatus",
    menberId,
    id,
    status,
  };
  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };
  fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((response) => {
      console.log(response.ok);
      return response.json();
    })
    .then((data) => {
      setLoding(true);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const swrGetData = async (key: [string, number]) => {
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "getPrivateData",
    menberId: key[1],
  };
  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };

  let returnStr: Todo[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  ).then((res) =>
    Promise.any([res.json()]).then((data: Todo[]) => {
      returnStr = data;
    })
  );

  return returnStr;
};

export const tanStackGetData = async (menberId: number): Promise<Todo[]> => {
  console.log(menberId);
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "getPrivateData",
    menberId: menberId,
  };

  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };

  const response = await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  );

  return response.json();
};
