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

export const getDataRequest = async (menberId: number): Promise<TODO[]> => {
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

  let returnStr: TODO[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((res) => res.json())
    .then(
      (result: TODO[]) => {
        returnStr = result;
      },
      (error: Error) => {
        console.log(error);
      }
    );

  return returnStr;
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

  let returnStr: TODO[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  ).then((res) =>
    Promise.any([res.json()]).then((data: TODO[]) => {
      returnStr = data;
    })
  );

  return returnStr;
};
