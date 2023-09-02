import React, { FC, useEffect, useState } from "react";
import styles from "./renderTodoList.module.scss";
import {
  Todo,
  RenderTodoType,
  ColumnType,
  UpDateStatusType,
} from "../../types/types";

export type RenderTodoListype = ColumnType & UpDateStatusType;

export const RenderTodoList: FC<RenderTodoListype> = (props) => {
  const { id, title, todos, flag, Delete, UpDateStatus } = props;
  console.log(todos);
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      {todos
        .sort((a: Todo, b: Todo) => Number(a.id) - Number(b.id))
        .map((todo: Todo, index: number) => (
          <div key={`${index}`}>
            <RenderTodo
              todo={todo}
              flag={flag}
              Delete={Delete}
              UpDateStatus={UpDateStatus}
            />
          </div>
        ))}
    </div>
  );
};

const RenderTodo: FC<RenderTodoType> = (props) => {
  const { todo, flag, Delete, UpDateStatus } = props;

  const [disabled, setDisabled] = useState<boolean>(false);
  const [leftDisabled, setLeftDisabled] = useState<boolean>(false);
  const [rightDisabled, setRightDisabled] = useState<boolean>(false);
  const changeStatus = () => {
    if (disabled) {
      UpDateStatus(todo.menberId, todo.id, todo.status);
    }
  };

  const settingDisabled = (left: boolean, right: boolean) => {
    setLeftDisabled(left);
    setRightDisabled(right);
  };

  useEffect(() => {
    if (disabled) {
      switch (todo.status) {
        case "inProgress":
          settingDisabled(true, true);
          break;
        case "done":
          settingDisabled(true, false);
          break;
        default:
          settingDisabled(false, true);
          break;
      }
    } else {
      settingDisabled(false, false);
    }
  }, [disabled]);

  return (
    <div
      className={styles.itemBox}
      onMouseEnter={() => setDisabled(true)}
      onMouseLeave={() => setDisabled(false)}
    >
      <div
        style={{ display: leftDisabled ? "block" : "none" }}
        onClick={() => changeStatus()}
      >
        ＜
      </div>

      <div className={styles.itemName}>{todo.todo}</div>
      {Delete && flag && (
        <button onClick={() => Delete(todo.menberId, todo.id)} disabled={!flag}>
          削除
        </button>
      )}

      <div
        style={{ display: rightDisabled ? "block" : "none" }}
        onClick={() => changeStatus()}
      >
        ＞
      </div>
    </div>
  );
};
