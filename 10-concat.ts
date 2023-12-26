type Concat<T extends any[], B extends any[]> = [
  ...T,
  ...B,
];

type Result = Concat<[1], [2, 3, "asd", undefined, unknown]> // expected to be [1, 2]
