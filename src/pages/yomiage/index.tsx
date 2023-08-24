import React, { useEffect, useState } from "react";

import styles from "../yomiage/yomiage.module.scss";

interface ITextToSpeech {
  text: string;
  lang: "en-US" | "ja-JP"; // ISO 639-1コードの形式
  speed: number; // 範囲: 0.1 ~ 10
  pitch: number; // 範囲: 0.1 ~ 10
  volume?: number; // 範囲: 0 ~ 1
  voiceName?: string; // 使用する音声の種類
}

export default function Home() {
  //  https://qiita.com/osakasho/items/1f24e24c1ad8a9bd0e94
  let utterance: SpeechSynthesisUtterance;

  /**
   * 特定の文字をしゃべらせる
   * @param props
   */
  const playTextToSpeech = async (props: ITextToSpeech) => {
    try {
      utterance = new SpeechSynthesisUtterance(props.text);

      if (props.voiceName) {
        if (
          speechSynthesis
            .getVoices()
            .find((voice) => voice.name === props.voiceName)
        ) {
          utterance.voice = speechSynthesis
            .getVoices()
            .find(
              (voice) => voice.name === props.voiceName
            ) as SpeechSynthesisVoice;
        }
      }
      utterance.rate = speed;
      utterance.pitch = pitch;
      utterance.volume = props.volume ? props.volume : 1;
      speechSynthesis.speak(utterance);
    } catch (e) {
    } finally {
    }
  };

  // テキストボックで打ち込めれた値
  const [text, setText] = useState<string>("");

  const [pitch, setPitch] = useState<number>(2.0);
  const [speed, setSpeed] = useState<number>(2.0);
  const [volume, setvolume] = useState<number>(1.0);

  const [get, set] = useState<boolean>(false);

  const click = () => {
    if (text) {
      set(false);
      playTextToSpeech({
        text,
        lang: "ja-JP",
        pitch,
        speed,
        volume,
      });
    }
  };

  const pause = () => {
    if (text) {
      speechSynthesis.pause();
      set(true);
    }
  };

  const resume = () => {
    if (text) {
      speechSynthesis.resume();
      set(false);
    }
  };

  const reset = () => {
    speechSynthesis.cancel();
    set(false);
  };

  function textAllDelete() {
    setText("");
    reset();
  }

  useEffect(() => {
    reset();
  }, []);

  console.log(text.split(/\r\n|\r|\n/g));

  return (
    <div className={styles.main}>
      <section className={styles.container}>
        <div className={styles.box}>
          <h1>読み上げくん（仮）</h1>
        </div>
        <div className={styles.box}>
          <textarea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className={styles.box}>
          <button onClick={() => click()} className={styles.buttonOutline}>
            開始
          </button>
          {get ? (
            <button onClick={() => resume()} className={styles.buttonOutline}>
              再生
            </button>
          ) : (
            <button onClick={() => pause()} className={styles.buttonOutline}>
              停止
            </button>
          )}
          <button onClick={() => reset()} className={styles.buttonOutline}>
            リセット
          </button>
          <button
            onClick={() => textAllDelete()}
            className={styles.buttonOutline}
          >
            text all delete
          </button>
        </div>
        <div className={styles.box}>
          pitch:{pitch.toFixed(1)}
          <input
            type="range"
            id="volume"
            value={pitch}
            onChange={(event) => {
              setPitch(event.target.valueAsNumber);
            }}
            min="0.0"
            max="10"
            step="0.1"
          ></input>
        </div>
        <div className={styles.box}>
          speed:{speed.toFixed(1)}
          <input
            type="range"
            id="volume"
            value={speed}
            onChange={(event) => {
              setSpeed(event.target.valueAsNumber);
            }}
            min="0.0"
            max="10"
            step="0.1"
          ></input>
        </div>
      </section>
    </div>
  );
}
