const tuple = ['boba', 'biba', 'right', 'left'] as const;

type TupleToObject<T extends readonly string[]> = {
  [V in T[number]]: V
}

type result = TupleToObject<typeof tuple>;
