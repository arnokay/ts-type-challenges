type Trim<T extends string> = T extends `${" "}${infer RestLeft}`
  ? Trim<RestLeft>
  : T extends `${infer RestRight}${" "}`
    ? Trim<RestRight>
    : T;

type TrimUpdated<T extends string> = T extends
  | `${" "}${infer Rest}`
  | `${infer Rest}${" "}`
  ? TrimUpdated<Rest>
  : T;

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

type trimmed2 = TrimUpdated<"   Hello World   ">; // expected to be 'Hello World'
