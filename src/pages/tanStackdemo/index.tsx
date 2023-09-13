import React, { useEffect, useState } from "react";

import { swrGetData, tanStackGetData } from "../../utli/GASAPI";
import { Todo } from "../../types/types";

import styles from "./tanStackdemo.module.scss";
import { useQuery } from "@tanstack/react-query";
import useSWR from "swr";

export default function Home() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { data: getTanStackData } = useQuery(["getTodo"], () =>
    tanStackGetData(3)
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
    </div>
  );
}
