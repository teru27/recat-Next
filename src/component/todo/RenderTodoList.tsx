import React, { FC, useEffect, useState } from "react";
import {
  Todo,
  RenderTodoType,
  ColumnType,
  UpDateStatusType,
  Status,
} from "../../types/types";

import LeftArrowIcon from "src/assets/svg/LeftArrow.svg";
import RightArrowIcon from "src/assets/svg/RightArrow.svg";
import DeleteIcon from "src/assets/svg/Delete.svg";

import styles from "./renderTodoList.module.scss";

export type RenderTodoListype = ColumnType & UpDateStatusType;

export const RenderTodoList: FC<RenderTodoListype> = (props) => {
  const { id, title, todos, Delete, flag, UpDateStatus } = props;
  console.log(todos);
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      {todos
        .sort((a: Todo, b: Todo) => Number(a.id) - Number(b.id))
        .map((todo: Todo, index: number) => (
          <div key={`key_${index}`}>
            <RenderTodo
              {...{
                todo,
                Delete,
                flag,
                UpDateStatus,
              }}
            />
          </div>
        ))}
    </div>
  );
};

const RenderTodo: FC<RenderTodoType> = (props) => {
  const { todo, flag, Delete, UpDateStatus } = props;

  const [hoverFlag, setHoverFlag] = useState<boolean>(false);
  const [leftDisabled, setLeftDisabled] = useState<boolean>(false);
  const [rightDisabled, setRightDisabled] = useState<boolean>(false);

  const changeStatusLogic = (direction: "left" | "right", status: Status) => {
    if (direction === "left" && status === "inProgress") return "backlog";
    if (direction === "right" && status === "inProgress") return "done";
    return "inProgress";
  };

  const changeStatus = (direction: "left" | "right") => {
    const status = changeStatusLogic(direction, todo.status);
    UpDateStatus(todo.menberId, todo.id, status);
  };

  const settingDisabled = (left: boolean, right: boolean): void => {
    setLeftDisabled(left);
    setRightDisabled(right);
  };

  useEffect(() => {
    if (hoverFlag) {
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
  }, [hoverFlag]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHoverFlag(true)}
      onMouseLeave={() => setHoverFlag(false)}
    >
      <div
        className={leftDisabled ? styles.leftArrowBlock : styles.ArrowNone}
        onClick={() => changeStatus("left")}
      >
        <LeftArrowIcon />
      </div>

      <div className={styles.itemBox}>
        <div className={styles.itemName}>{todo.todo}</div>
        {Delete && (
          <div
            onClick={() => flag && Delete(todo.menberId, todo.id)}
            className={
              !flag ? styles.noselectDeleteIcon : styles.selectDeleteIcon
            }
          >
            <DeleteIcon />
          </div>
        )}
      </div>

      <div
        className={rightDisabled ? styles.rightArrowBlock : styles.ArrowNone}
        onClick={() => changeStatus("right")}
      >
        <RightArrowIcon />
      </div>
    </div>
  );
};
