type MyExclude<T, A> = T extends A ? never : T;

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

