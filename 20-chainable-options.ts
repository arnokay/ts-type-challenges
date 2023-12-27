type Chainable<T = {}> = {
  option: <Param extends string, Value>(
    param: Param,
    value: Value,
  ) => Chainable<
    {
      [key in keyof T as key extends Param ? never : key]: T[key];
    } & {
      [key in Param as key extends keyof T
        ? T[key] extends Value
          ? never
          : key
        : key]: Value;
    }
  >;
  get: () => T;
};

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .option("topa", Promise.resolve())
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

type IsEqual = typeof result extends Result ? true : false;
