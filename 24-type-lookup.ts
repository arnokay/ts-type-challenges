interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type LookUp<
  Biba extends Record<string, any>,
  Boba extends string,
> = Biba extends { type: Boba } ? Biba : never;

type MyDogType = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
