interface Lengthwise {
    length: number;
}

function loggingIdentity1<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

loggingIdentity1('1223');

class BeeKeeper {
    hasMask: boolean | undefined;
}

class ZooKeeper {
    nametag: string | undefined;
}

class Animal {
    numLegs: number | undefined;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper;
}

class Lion extends ZooKeeper {
    keeper: ZooKeeper = new ZooKeeper;
    numLegs!: number;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!