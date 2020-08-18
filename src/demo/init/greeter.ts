import '../basicTypes/index'
import '../function'
import '../enums'
import '../interface/index'
import '../class/index'
import '../generics/index'
import '../advancedTypes/index'

function greeter(person: string) {
    return "Hello " + person;
}

let user = "world";
let errorUser = [1, 2, 3];
let world: string = greeter(user);
document.querySelectorAll('.app')[0].innerHTML = world;


type Diff<T, U> = T extends U ? never : T;

type DiffValue = Diff<'a' | 'b', 'a' | 'e'>
type D1 = Diff<'a', 'a' | 'e'>
type D2 = Diff<'b', 'a' | 'e'>

type D3 = Exclude<'a', 'b'>