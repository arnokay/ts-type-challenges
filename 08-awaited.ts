type ExampleType = Promise<Promise<string>>

type MyAwaited<T> = T extends Promise<infer U> 
    ? MyAwaited<U>
    : T

type Result = MyAwaited<ExampleType> // string

