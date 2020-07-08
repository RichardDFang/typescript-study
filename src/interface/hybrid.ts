interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter> function(start: number) {};
    counter.interval = 123;
    counter.reset = function() {};
    return counter;
}

let counter1 = getCounter();
counter1(10);
counter1.reset();
counter1.interval = 1.5;
