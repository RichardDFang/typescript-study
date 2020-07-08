interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = { x: 10, y: 20 };

let test: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number>;

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare1(config: SquareConfig): { color: string; area: number } {
    return {
        color: '11234',
        area: 200
    };
}

let mySquare1 = createSquare1({ color: "red", width: 100 });