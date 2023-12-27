type Fn = (a: number, b: string) => number;

type AppendArgument<Func, T> = Func extends (...args: infer Args) => infer R
  ? (...args: [...Args, T]) => R
  : Func;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number
