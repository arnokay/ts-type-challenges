interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

const todo: MyReadonly<Todo> = {
  title: "hey",
  description: "foobar",
};


// must throw error
todo.title = "Hello";
todo.description = "popa";
