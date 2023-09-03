import { useState, useEffect } from "react";
import ModalBtn from "../../component/modal/ModalBtn";
import ModalElement from "../../component/modal/ModalElement";

//　APP
export default function App() {
  // モーダルが表示されている状態を管理
  const [modalOpen, setModalOpen] = useState(false);
  // モーダルの名前を管理
  const [modalName, setModalName] = useState("");
  // 読み込みの完了を管理
  const [readComplete, setReadComplete] = useState(false);

  // モーダルが表示されたらbody要素にクラスを追加
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("is_modal");
    } else {
      document.body.classList.remove("is_modal");
    }
  }, [modalOpen]);

  // モーダルボタンをクリック（イベント）
  const modalClick = (e: any) => {
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

  return (
    <div className="App">
      <h1>モーダルウィンドウ</h1>

      <ModalBtn modalBtnName="modal2" modalClick={modalClick}>
        モーダル２（テキスト）
      </ModalBtn>
      <ModalElement
        targetName="modal2"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
        readComplete
      >
        <input type="text" />
        <button onClick={() => console.log("aaa")}>送信</button>
      </ModalElement>
    </div>
  );
}
