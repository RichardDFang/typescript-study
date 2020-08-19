"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var a = require('./libs/module-lib');
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        // case "circle": return Math.PI * s.radius ** 2;
    }
}
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: 'Jarid',
    age: 35
};
var strings = pluck(person, ['name']); // ok, string[]
var key;
// console.log(key)
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    // for (let id in second) {
    //     if (!result.hasOwnProperty(id)) {
    //         (<any>result)[id] = (<any>second)[id];
    //     }
    // }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
// let foo: A1 & B1 = {
//     // a: 1,
//     // b: '1'
// }
var s = "foo";
// s = null; // 错误, 'null'不能赋值给'string'
var sn = "bar";
sn = null; // 可以
// sn = undefined; // error, 'undefined'不能赋值给'string | null'
// 可选参数
function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
// f(1, null); // error, 'null' is not assignable to 'number | undefined'
// 可选属性
var GG = /** @class */ (function () {
    function GG() {
    }
    return GG;
}());
var c = new GG();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
// c.b = null; // error, 'null' is not assignable to 'number | undefined'
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function getSmallPet() {
    return {
        layEggs: function () { },
        fly: function () { }
    };
}
var pet = getSmallPet();
console.log(111111, pet);
pet.layEggs(); // okay
// pet.swim();    // errors
if (pet.swim !== undefined) {
    pet.swim();
}
else {
    pet.fly();
}
// 用户自定义的类型保护
function isFish(pet) {
    return pet.swim !== undefined;
}
// typeof 类型保护
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
// /**
//  * Takes a string and adds "padding" to the left.
//  * If 'padding' is a string, then 'padding' is appended to the left side.
//  * If 'padding' is a number, then that number of spaces is added to the left side.
//  */
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }
// padLeft("Hello world", 4); // returns "    Hello world"
// let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft1(value, padding) {
    // ...
}
var indentedString = padLeft1("Hello world", 1); // errors during compilation
define("demo/advancedTypes/index", ["require", "exports", "./discriminatedUnions", "./indexTypes", "./intersectionTypes", "./mappedTypes", "./nullableTypes", "./StringLiteralTypes", "./typeAliases", "./typeGuardsAndDifferentiatingTypes", "./unionTypes"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
var anyData;
// notSure.ifItExists();
// notSure.toFixed();
var list = [1, 2, 3];
var list2 = [4, 5, 6];
//tuple
var x = ['111', 222, '222'];
// x.push(2)
// console.log(x)
var isDone = false;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var colorful = Color.Green;
var colorName = Color[2];
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Blue"] = 2] = "Blue";
    Color1[Color1["Green"] = 3] = "Green";
})(Color1 || (Color1 = {}));
var d = Color1.Green;
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var content = 'nihao';
var myName = "Gene";
var age = 37;
var sentence = "Hello, my name is " + myName + ".\n\nI'll be " + (age + 1) + " years old next month.";
var someValue = "this is a string";
var strLength = someValue.length;
var strLength2 = someValue.length;
function warnUser() {
}
var noReturn = function () { };
var unusable = undefined;
define("demo/basicTypes/index", ["require", "exports", "./any", "./array", "./boolean", "./enum", "./never", "./number", "./string", "./typeAssertions", "./void"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var u = undefined;
    var n = null;
    var a;
});
var Animal9 = /** @class */ (function () {
    function Animal9() {
    }
    Animal9.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal9;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal9));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name: ' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
// let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
var department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
var passcode = "secret passcode";
var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee1;
}());
var employee1 = new Employee1();
employee1.fullName = "Bob Smith";
if (employee1.fullName) {
    alert(employee1.fullName);
}
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter1 = new Greeter("world");
console.log(greeter1);
define("demo/class/index", ["require", "exports", "./classes"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal1("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// let ele: newElement = {
//     createElement: (tagName: any) => {
//         if (typeof tagName === 'string') {
//             return HTMLDivElement;
//         }
//         return new Element();
//     }
// }
// let b = ele.createElement('span');
var Animal10;
(function (Animal10) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal10.animalsHaveMuscles = animalsHaveMuscles;
})(Animal10 || (Animal10 = {}));
(function (Animal10) {
    var haveMuscles = false;
    function doAnimalsHaveMuscles() {
        return haveMuscles; // Error, because haveMuscles is not accessible here
    }
    Animal10.doAnimalsHaveMuscles = doAnimalsHaveMuscles;
})(Animal10 || (Animal10 = {}));
// enum Direction {
//     Up = 1,
//     Down,
//     Left,
//     Right
// }
// enum BooleanLikeHeterogeneousEnum {
//     No = 0,
//     Yes = "YES",
// }
// enum ShapeKind {
//     Circle,
//     Square,
// }
// // console.log(ShapeKind)
// interface Circle {
//     kind: ShapeKind.Circle;
//     radius: number;
// }
// interface Square {
//     kind: ShapeKind.Square;
//     sideLength: number;
// }
// let cos: Circle = {
//     kind: ShapeKind.Circle,
//     //    ~~~~~~~~~~~~~~~~ Error!
//     radius: 100,
// }
// console.log(cos)
// declare enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
var pickedCard2 = pickCard(15);
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck1.createCardPicker();
var pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck.createCardPicker();
var pickedCard3 = cardPicker1();
// alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);
define("demo/function/index", ["require", "exports", "./overloads", "./restParameters", "./this", "./thisParameter"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var add = function (x, y) { return x + y; };
});
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity1(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity1('1223');
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new BeeKeeper;
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.keeper = new ZooKeeper;
        return _this;
    }
    return Lion;
}(ZooKeeper));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }
function identity1(arg) {
    return arg;
}
var myIdentity = identity1;
define("demo/generics/index", ["require", "exports", "./genericClasses", "./genericConstraints", "./genericTypeVariables", "./genericTypes"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function identity(arg) {
        return arg;
    }
    var output = identity("myString"); // type of output will be 'string'
});
// interface ClockInterface {
//     currentTime: Date
// }
function createClock(ctor, hour, minute) {
    return new ctor(minute, hour);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep, beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick, tock');
    };
    return AnalogClock;
}());
// let digital = new DigitalClock(1, 2);
var digital = createClock(DigitalClock, 12, 18);
var analog = createClock(AnalogClock, 7, 9);
var A = /** @class */ (function () {
    function A() {
        this.d = 1;
        this.e = 2;
    }
    return A;
}());
var H = /** @class */ (function (_super) {
    __extends(H, _super);
    function H() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return H;
}(A));
var U = /** @class */ (function (_super) {
    __extends(U, _super);
    function U() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.d = 2;
        return _this;
    }
    return U;
}(A));
var square = {};
square.color = 'blue';
square.sideLength = 10;
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var counter1 = getCounter();
counter1(10);
counter1.reset();
counter1.interval = 1.5;
// interface StringArray {
//     [index: number]: string
// }
// let myArray: StringArray;
// myArray = ["Bob", "Fred"];
// let myStr: string = myArray[0];
var Animal2 = /** @class */ (function () {
    function Animal2() {
    }
    return Animal2;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog1;
}(Animal2));
var notOkay;
var animal2 = new Animal2();
notOkay = {
    'animal': animal2,
    1: new Dog1()
};
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var p1 = { x: 10, y: 20 };
var test = [1, 2, 3, 4, 5];
var ro;
function createSquare1(config) {
    return {
        color: '11234',
        area: 200
    };
}
var mySquare1 = createSquare1({ color: "red", width: 100 });
define("demo/interface/index", ["require", "exports", "./classTypes", "./extending", "./function", "./hybrid", "./indexable", "./optionalProperties", "./readonly"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function printLabel(labelledObj) {
        // console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object", type: 2 };
    printLabel(myObj);
});
define("demo/init/greeter", ["require", "exports", "demo/basicTypes/index", "../function", "../enums", "demo/interface/index", "demo/class/index", "demo/generics/index", "demo/advancedTypes/index"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function greeter(person) {
        return "Hello " + person;
    }
    var user = "world";
    var errorUser = [1, 2, 3];
    var world = greeter(user);
    document.querySelectorAll('.app')[0].innerHTML = world;
});
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try
var strings1 = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s_1 = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s_1 + "\" - " + (validators[name_1].isAcceptable(s_1) ? "matches" : "does not match") + " " + name_1);
    }
}
define("es6/b", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.str = 'hello world';
});
define("es6/a", ["require", "exports", "es6/b"], function (require, exports, b_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = 1;
    var b = 2;
    exports.b = b;
    var c = 3;
    exports.c = c;
    function f() { }
    exports.f = f;
    function g() { }
    exports.G = g;
    function default_1() {
        console.log('default export');
    }
    exports.default = default_1;
    exports.hello = b_1.str;
});
define("es6/c", ["require", "exports", "es6/a", "es6/a", "es6/a", "es6/a"], function (require, exports, a_1, a_2, All, a_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    All = __importStar(All);
    a_3 = __importDefault(a_3);
    var p = {
        x: 1,
        y: 2
    };
    console.log(a_1.a, a_1.b, a_1.c);
    console.log(p);
    console.log(a_2.f);
    console.log(All);
    console.log(a_3.default);
});
define("libs/index", ["require", "exports", "jquery", "./module-lib", "./umd-lib", "moment"], function (require, exports, jquery_1, module_lib_1, umd_lib_1, moment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    jquery_1 = __importDefault(jquery_1);
    module_lib_1 = __importDefault(module_lib_1);
    umd_lib_1 = __importDefault(umd_lib_1);
    moment_1 = __importDefault(moment_1);
    jquery_1.default('.app').css('color', 'red');
    globalLib({ x: 1 });
    module_lib_1.default.doSomething();
    umd_lib_1.default.doSomething();
    moment_1.default.myFunction = function () {
    };
    globalLib.doAnything = function () { };
});
