// interface StringArray {
//     [index: number]: string
// }

// let myArray: StringArray;

// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];


class Animal2 {
    name!: string;
}
class Dog1 extends Animal2 {
    breed: string | undefined;
}

// 错误：使用'string'索引，有时会得到Animal!
interface NotOkay {
    [x: string]: Animal2;
    [y: number]: Dog1;
}

interface NumberDictionary {
    [index: number]: string,
    length: number,
    name: string
}

let notOkay: NotOkay;
let animal2: Animal2 = new Animal2();
notOkay = {
    'animal': animal2,
    1: new Dog1()
};