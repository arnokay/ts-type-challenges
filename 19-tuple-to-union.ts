type Arr = ["1", "2", "3"];

type TupleToUnion<T extends Array<any>> = T extends Array<infer Item>
  ? Item
  : T;

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
