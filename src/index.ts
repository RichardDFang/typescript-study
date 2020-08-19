let a = require('./libs/module-lib')

// console.log([1,1,2,3,3].flat())\

class A {
    x: number = 1
}

let {x, y, ...z} = {x:1, y:2, a:3, b:4}
let n = {x, y, ...z};