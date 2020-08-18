interface Shape1 {
    color: string
}

interface Square extends Shape1 {
    sideLength: number
}

let square = <Square>{}
square.color = 'blue';
square.sideLength = 10;