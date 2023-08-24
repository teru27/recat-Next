import React, { FC } from "react";
import styles from "./renderTodoList.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import {
  RenderTodoListType,
  Todo,
  RenderTodoType,
  ColumnType,
} from "../../types/types";

export const RenderTodoList: FC<ColumnType> = (props) => {
  const { id, title, todos, flag, Delete } = props;
  console.log(todos);
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      {todos
        .sort((a: Todo, b: Todo) => Number(a.id) - Number(b.id))
        .map((todo: Todo, index: number) => (
          <div className={styles.itemBox} key={`${index}`}>
            <RenderTodo todo={todo} flag={flag} Delete={Delete} />
          </div>
        ))}
    </div>
  );
};

const RenderTodo: FC<RenderTodoType> = (props) => {
  const { todo, flag, Delete } = props;

  return (
    <>
      <div className={styles.itemName}>{todo.todo}</div>
      {Delete && flag && (
        <button onClick={() => Delete(todo.menberId, todo.id)} disabled={!flag}>
          削除
        </button>
      )}
    </>
  );
};
