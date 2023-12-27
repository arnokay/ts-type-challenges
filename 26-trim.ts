type Trim<T extends string> = T extends `${" "}${infer RestLeft}`
  ? Trim<RestLeft>
  : T extends `${infer RestRight}${" "}`
    ? Trim<RestRight>
    : T;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
