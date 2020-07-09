import '../basicTypes/index'
import '../function'

function greeter(person: string) {
    return "Hello " + person;
}

let user = "world";
let errorUser = [1, 2, 3];
let world: string = greeter(user);
document.querySelectorAll('.app')[0].innerHTML = world;