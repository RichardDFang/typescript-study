interface Counter {
    (start: number): number;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function(start: number) {} as Counter;
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let counter1 = getCounter();
counter1(10);
counter1.reset();
counter1.interval = 1.5;
