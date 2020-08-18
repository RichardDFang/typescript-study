import './genericClasses'
import './genericConstraints'
import './genericTypeVariables'
import './genericTypes'

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'