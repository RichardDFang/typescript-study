type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P];
}
type PartialType<T> = {
    [P in keyof T]?: T[P];
}