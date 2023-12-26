interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyOmit<T, B extends keyof T> = {
  [K in keyof T as K extends B ? never : K]: T[K]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}

