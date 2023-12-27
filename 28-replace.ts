type Replace<
  S extends string,
  From extends string,
  To extends string,
> = S extends `${infer RestLeft}${From}${infer RestRight}`
  ? `${RestLeft}${To}${RestRight}`
  : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
