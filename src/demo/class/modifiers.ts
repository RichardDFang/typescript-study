class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal1 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal1("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.