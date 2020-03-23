function greeter(person: string) {
    return "Hello " + person;
}

let user = "world";
let errorUser = [1, 2, 3];
greeter(user);
greeter(errorUser);