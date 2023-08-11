const NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY;

const NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID;

const NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY;

type item = {
  URL: string;
  itemId: string;
  menberId: string;
  parts: string;
  price: string;
  productName: string;
};

type getItemId = {
  itemId: number;
  rowNumber: number;
};

type Postparam = {};

const useFetch = (postparam: Postparam) => {};

export const getDataRequest = async (menberId: number): Promise<item[]> => {
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

  let returnStr: item[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  )
    .then((res) => res.json())
    .then(
      (result: item[]) => {
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

  let returnStr: item[] = [];

  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  ).then((res) =>
    Promise.any([res.json()]).then((data: item[]) => {
      returnStr = data;
    })
  );

  return returnStr;
};
