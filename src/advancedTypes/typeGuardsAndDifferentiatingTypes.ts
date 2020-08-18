interface Bird {
    fly():any;
    layEggs():any;
}

interface Fish {
    swim():any;
    layEggs():any;
}

function getSmallPet(): Fish | Bird {
    return <Bird>{
        layEggs: () => {},
        fly: () => {}
    };
}

let pet = getSmallPet();
console.log(111111, pet)
pet.layEggs(); // okay
// pet.swim();    // errors

if ((<Fish>pet).swim !== undefined) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}


// 用户自定义的类型保护
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

// typeof 类型保护
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

// instanceof 类型保护
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}