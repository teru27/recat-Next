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
    Promise.any([res.json()]).then((data) => {
      console.log(data);
      returnStr = data;
    })
  );

  return returnStr;
};

export const swrDataLength = async () => {
  const sourceList = {
    sheetNo: 1,
    method: "GET",
    type: "DataLength",
  };

  const postparam = {
    method: "POST",
    body: JSON.stringify(sourceList),
  };
  let result = undefined;
  await fetch(
    `https://script.google.com/macros/s/${NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY}/exec`,
    postparam
  ).then((res) =>
    Promise.any([res.json()]).then((data) => {
      result = data[0].DataLength;
    })
  );
  return result;
};
