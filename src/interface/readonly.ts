interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5;

let a: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = a;

a = ro;

a = ro as number[];

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare1(config: SquareConfig): { color: string; area: number } {
    return ;
}

let mySquare = createSquare1({ colour: "red", width: 100 });