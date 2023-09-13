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
import ModalBtn from "../modal/ModalBtn";
import ModalElement from "../modal/ModalElement";

export type RenderTodoListype = ColumnType &
  UpDateStatusType & {
    callBack: (
      getInput: string,
      status: string,
      callBack: (e: any) => void
    ) => void;
  };

export const RenderTodoList: FC<RenderTodoListype> = (props) => {
  const { id, title, todos, Delete, flag, UpDateStatus, callBack } = props;

  // テキストボックで打ち込めれた値
  const [getInput, setInput] = useState<string>("");

  // モーダルが表示されている状態を管理
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // モーダルの名前を管理
  const [modalName, setModalName] = useState<string>("");
  const [error, setError] = useState<string>("");
  // 読み込みの完了を管理
  const [readComplete, setReadComplete] = useState<boolean>(false);

  // モーダルが表示されたらbody要素にクラスを追加
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("is_modal");
    } else {
      document.body.classList.remove("is_modal");
    }
  }, [modalOpen]);

  // モーダルボタンをクリック（イベント）
  const modalClick = (e: any): void => {
    setInput("");
    setError("");
    const { target } = e;

    setModalOpen((prev) => !prev);
    setReadComplete(false);
    // eがボタンではない場合、処理を中止
    if (!(target instanceof HTMLButtonElement)) {
      return;
    }
    // 表示するモーダルを紐付け
    if (target.name) {
      setModalName(target.name);
    } else {
      setModalName("");
    }
  };

  const click = (): void => {
    if (getInput) {
      callBack(getInput, id, modalClick);
    } else {
      setError("Error : set text");
    }
  };

  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <div className={styles.ModalBtn}>
        <ModalBtn modalBtnName="modal2" modalClick={modalClick}>
          +
        </ModalBtn>
      </div>
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

      <ModalElement
        targetName="modal2"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
        readComplete
      >
        <div className={styles.inputBox}>
          <div className={styles.inputs}>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={getInput}
              className={styles.inputs}
            />
            <button onClick={() => click()}>追加</button>

            {error != "" && <div className={styles.error}>{error}</div>}
          </div>
        </div>
      </ModalElement>
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
