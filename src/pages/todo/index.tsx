import React, { FC, useEffect, useState } from "react";
import useSWR from "swr";

import { swrGetData } from "../../utli/GASAPI";
import { ColumnType, Status, Todo } from "../../types/types";
import { RenderTodoList } from "../../component/todo/RenderTodoList";

import styles from "./todo.module.scss";

export default function Home() {
  const NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY;

  const data: ColumnType[] = [
    {
      id: "backLog",
      title: "課題",
      todos: [],
      deleteEvent: false,
    },
    {
      id: "inProgress",
      title: "進行中",
      todos: [],
      deleteEvent: false,
    },
    {
      id: "done",
      title: "完了",
      todos: [],
      deleteEvent: true,
    },
  ];

  const [columns, setColumns] = useState<ColumnType[]>(data);

  // menberIdで絞り込んだデータ
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // 追加後などのあとにデータの取得フラグ
  const [lodging, setLoding] = useState<boolean>(true);

  // テキストボックで打ち込めれた値
  const [getInput, setInput] = useState<string>("");

  // 削除ボタンの処理中のフラグ
  const [flag, setFlag] = useState<boolean>(true);

  // 連想配列に変換
  const CsvDic = (props: any) => {
    const [header, ...rows] = props;
    return rows.map((row: any[]) =>
      row.reduce(
        (acc: any, cell: any, i: string | number) => ({
          ...acc,
          [header[i]]: cell,
        }),
        {}
      )
    );
  };

  useEffect(() => {
    // tureのときのみ動かす
    // スプレットシートから全情報を取得
    // if (loding) {
    //   fetch(
    //     `https://sheets.googleapis.com/v4/spreadsheets/${NEXT_PUBLIC_GOOGLE_SHEETS_DOC_ID}/values/sheet1?key=${NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY}`
    //   )
    //     .then((res) => res.json())
    //     .then((datas) => {
    //       setAllProduct(CsvDic(datas.values));
    //     });
    // }
  }, []);

  // データの削除
  const Delete = (menberId: string, todoId: string) => {
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
  const Update = (menberId: string, todoId: string) => {
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
  const UpDateStatus = (menberId: string, id: string, status: Status) => {
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

  // データの追加
  const addData = async (todo: string) => {
    setFlag(false);
    // GAS側で data プロパティにアクセスしているため、
    // クライアントから送るデータにも data プロパティが必要。
    const sourceList = {
      sheetNo: 1,
      method: "POST",
      menberId: "1",
      data: [
        {
          todo: `${todo}`,
          status: "backlog",
        },
      ],
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
        console.log(response.status);
        return response.json();
      })
      .then((data) => {
        console.log(data.result);
        setLoding(true);
      })
      .catch((err) => {
        console.log("Error!");
      });
  };

  // スプレットシートに送る
  const click = () => {
    if (getInput) {
      addData(getInput);
    }
  };

  // データ取得
  const {
    data: getData,
    error: GetDataerror,
    mutate: GetDataMutate,
  } = useSWR(["GetData", 1], swrGetData);

  useEffect(() => {
    console.log(getData);
    if (getData) {
      setTodoList(getData);
    }

    if (!flag || lodging) {
      GetDataMutate();
      setLoding(false);
      setFlag(true);
      setInput("");
    }
  }, [getData, lodging]);

  // menberIdの登録仮(今後gasから生成を行い登録するように修正)
  useEffect(() => {
    const menberId = localStorage.getItem("meberId");
    if (!menberId) {
      const sourceList = {
        sheetNo: 1,
        method: "GET",
        type: "makeMenberId",
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
          console.log(data);
          localStorage.setItem("meberId", data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    todoList.forEach((todo: Todo, index: number) => {
      switch (todo.status) {
        case "inProgress":
          data[1].todos.push(todo);
          break;
        case "done":
          data[2].todos.push(todo);
          break;
        default:
          data[0].todos.push(todo);
          break;
      }
    });

    setColumns(data);
  }, [todoList]);

  console.log(data);

  return (
    <div className={styles.main}>
      <h1>Todo List</h1>
      <div className={styles.inputBox}>
        <div className={styles.inputs}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={getInput}
            className={styles.inputs}
          />
          <button onClick={() => click()} disabled={!flag}>
            送信
          </button>
        </div>
      </div>
      <button onClick={() => Update("2", "5")}>Update demo</button>

      <section className={styles.container}>
        {columns.map((column) => {
          const props = {
            id: column.id,
            title: column.title,
            todos: column.todos,
            UpDateStatus: UpDateStatus,
            flag: column.deleteEvent ? flag : undefined,
            Delete: column.deleteEvent ? Delete : undefined,
          };

          return <RenderTodoList {...props} />;
        })}
      </section>
    </div>
  );
}
