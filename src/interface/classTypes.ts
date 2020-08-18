// interface ClockInterface {
//     currentTime: Date
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }

interface ClockConstructor {
    new (hour: number, minite: number): ClockInterface
}

interface ClockInterface {
    tick(): any
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(minute, hour);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep, beep')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick, tock')
    }
}
// let digital = new DigitalClock(1, 2);

let digital = createClock(DigitalClock, 12, 18);
let analog = createClock(AnalogClock, 7, 9);








class A {
    d = 1
    private e = 2
}

console.log(1111111, A)

interface B extends A {
}

class H extends A implements B {

}

class U extends A {
    d = 2
}
console.log(22222222222, new H())