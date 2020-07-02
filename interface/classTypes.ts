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
    tick()
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
    constructor(h: string, m: number) {}
    tick() {
        console.log('tick, tock')
    }
}
// let digital = new DigitalClock(1, 2);

let digital = createClock(DigitalClock, 12, 18);
let analog = createClock(AnalogClock, 7, 9);