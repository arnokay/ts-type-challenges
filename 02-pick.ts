interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, B extends keyof T> = {
  [key in B]: T[key];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
