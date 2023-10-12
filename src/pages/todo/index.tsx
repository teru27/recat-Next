import React, { useEffect, useState } from "react";
import useSWR from "swr";

import { swrGetData } from "../../utli/GASAPI";
import { ColumnType, Status, Todo } from "../../types/types";
import { RenderTodoList } from "../../component/todo/RenderTodoList";

import styles from "./todo.module.scss";
import { Lodging } from "../../component/lodging/Lodging";

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
  const [todoList, setTodoList] = useState<Todo[]>();

  // データ更新フラグ lodging: true , not lodging:false
  const [nowLodging, setNowLodging] = useState<boolean>(true);

  // APIからdateを受けたった
  const [fetchEndFlag, setFetchEndFlag] = useState<boolean>(true);

  // APIからdateを受けたった
  const [userId, setUserId] = useState<number>();

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

  // データの削除
  const Delete = (menberId: string, todoId: string) => {
    setNowLodging(true);
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
        console.log(data);
        setFetchEndFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // データのアップデート
  const Update = (menberId: string, todoId: string) => {
    setNowLodging(true);
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
        setFetchEndFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Statusのアップデート
  const UpDateStatus = (menberId: string, id: string, status: Status) => {
    console.log("Click UpDateStatus");
    setNowLodging(true);
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
        setFetchEndFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // データの追加
  const addData = async (todo: string, status: string) => {
    setNowLodging(true);
    // GAS側で data プロパティにアクセスしているため、
    // クライアントから送るデータにも data プロパティが必要。
    const sourceList = {
      sheetNo: 1,
      method: "POST",
      menberId: "1",
      data: [
        {
          todo: `${todo}`,
          status,
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
        setFetchEndFlag(true);
      })
      .catch((err) => {
        console.log("Error!");
      });
  };

  // スプレットシートに送る
  const callBack = (
    getInput: string,
    status: string,
    callBack: (e: any) => void
  ) => {
    addData(getInput, status);
    callBack("");
  };

  // データ取得
  const {
    data: getData,
    error: GetDataerror,
    mutate: GetDataMutate,
  } = useSWR(["GetData", 1], swrGetData);

  useEffect(() => {
    if (getData) {
      setTodoList(getData);
    }
    if (fetchEndFlag) {
      GetDataMutate();
      setFetchEndFlag(false);
    }
  }, [getData, fetchEndFlag]);

  useEffect(() => {
    setNowLodging(true);
    console.log(todoList);
    if (todoList) {
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
    }
  }, [todoList]);

  // 初期読み込み時にloadingの画面を表示するかの処理
  useEffect(() => {
    // 登録されていなかった場合、デフォルトでfalse
    if (todoList && todoList.length === 0) {
      setNowLodging(false);
    } else {
      const columnsFlag = columns.map(
        (column: ColumnType, index: number) => column.todos.length !== 0
      );
      setNowLodging(!columnsFlag.some((flag) => flag));
    }
  }, [columns]);

  // menberIdの登録仮(今後gasから生成を行い登録するように修正)
  useEffect(() => {
    const menberId = localStorage.getItem("meberId");
    if (!menberId && !userId) {
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
          setUserId(Number(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUserId(Number(menberId));
  }, []);

  return (
    <div>
      <div className={styles.userId}>id : {userId}</div>
      <div className={styles.main}>
        {nowLodging && (
          <div className={styles.lodging_overlay}>
            <Lodging />
          </div>
        )}

        <h1>Todo List</h1>

        <section className={styles.container}>
          {columns.map((column) => {
            const props = {
              id: column.id,
              title: column.title,
              todos: column.todos,
              UpDateStatus: UpDateStatus,
              callBack,
              flag: nowLodging,
              Delete: column.deleteEvent ? Delete : undefined,
            };
            return <RenderTodoList {...props} />;
          })}
        </section>
      </div>
    </div>
  );
}
