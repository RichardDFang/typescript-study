const version = '1.0.0';

function doSomething() {
    console.log('module-lib is doing something')
}

function moduleLib(option) {
    console.log('module-lib options')
}

moduleLib.version = version;
moduleLib.doSomething = doSomething;
moduleLib.abc = 1;

module.exports = moduleLib