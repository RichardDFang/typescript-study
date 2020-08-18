type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
}
type PartialType<T> = {
    [P in keyof T]?: T[P];
}

interface obj {
    a: 1
}

type ReadonlyObj = Readonly<obj>;
type RecordObj = Record<'x' | 'y', obj>