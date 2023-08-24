export type Status = "backlog" | "inProgress" | "done";

export type Todo = {
  todo: string;
  id: string;
  menberId: string;
  status: Status;
};

export type RenderTodoListType = {
  todoList: Todo[];
  flag: boolean;
  Delete: (menberId: string, todoId: string) => void;
};

export type RenderTodoType = {
  todo: Todo;
  flag?: boolean;
  Delete?: (menberId: string, todoId: string) => void;
};

export type ColumnType = {
  id: string;
  title: string;
  todos: Todo[];
  deleteEvent?: boolean;
  flag?: boolean;
  Delete?: (menberId: string, todoId: string) => void;
};
