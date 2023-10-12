import React, { useEffect, useState } from "react";

import { tanStackGetData } from "../../utli/GASAPI";
import { Todo } from "../../types/types";

import styles from "./tanStackdemo.module.scss";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const [get, set] = useState<number | false>(2000);

  const { data: getTanStackData } = useQuery(
    ["getTodo"],
    () => tanStackGetData(3),
    { refetchInterval: () => get }
  );

  useEffect(() => {
    if (getTanStackData) {
      setTodoList(getTanStackData);
    }
  }, [getTanStackData]);

  return (
    <div className={styles.main}>
      <h1>TanStack</h1>
      {todoList.map((todo, index) => (
        <div key={`_${index}`}>{todo.todo}</div>
      ))}

      {get === 2000 ? (
        <button onClick={() => set(false)}>stop fetch API </button>
      ) : (
        <button onClick={() => set(2000)}>strat fetch API</button>
      )}
    </div>
  );
}
