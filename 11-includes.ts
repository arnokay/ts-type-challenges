type Includes<T extends any[], B> = B extends T[keyof T] ? true : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Wamuu">; // expected to be `true`
type isDioHere = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
