type MyCapitalize<T extends string> =
  T extends `${infer FirstLetter}${infer Rest}`
    ? `${Uppercase<FirstLetter>}${Rest}`
    : T;

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
