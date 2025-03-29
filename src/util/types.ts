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

export interface card {
  key: string;
  name: string;
  count: number;
}

export interface cardsType {
  tactical: card[];
  technical: card[];
  physical: card[];
  support: card[];
}

export interface menuDataType {
  menu: string;
  card1: string;
  card2: string;
  card3: string;
  kick: number;
  speed: number;
  energy: number;
  technique: number;
  physical: number;
  jump: number;
  mental: number;
  Fatigue: number;
  defense: number;
  offense: number;
  type1: string;
  type2: string;
  type3: string;
}

export interface holyRelicStats {
  stats: number;
  text: string;
}
