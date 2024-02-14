export type Status = "backlog" | "inProgress" | "done";

export interface Todo {
  todo: string;
  id: string;
  menberId: string;
  status: Status;
}

export interface RenderTodoListType {
  todoList: Todo[];
  flag: boolean;
  Delete: (menberId: string, todoId: string) => void;
}

export interface UpDateStatusType {
  UpDateStatus: (menberId: string, id: string, status: Status) => void;
}

export type RenderTodoType = UpDateStatusType & {
  todo: Todo;
  flag?: boolean;
  Delete?: (menberId: string, todoId: string) => void;
};

export interface ColumnType {
  id: string;
  title: string;
  todos: Todo[];
  deleteEvent?: boolean;
  flag?: boolean;
  Delete?: (menberId: string, todoId: string) => void;
}
