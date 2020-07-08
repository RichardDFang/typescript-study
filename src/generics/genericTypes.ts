// interface GenericIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: GenericIdentityFn = identity;


interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity1;