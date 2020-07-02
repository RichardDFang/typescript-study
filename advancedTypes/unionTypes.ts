// /**
//  * Takes a string and adds "padding" to the left.
//  * If 'padding' is a string, then 'padding' is appended to the left side.
//  * If 'padding' is a number, then that number of spaces is added to the left side.
//  */
// function padLeft(value: string, padding: any) {
//     if (typeof padding === "number") {
//         return Array(padding + 1).join(" ") + value;
//     }
//     if (typeof padding === "string") {
//         return padding + value;
//     }
//     throw new Error(`Expected string or number, got '${padding}'.`);
// }

// padLeft("Hello world", 4); // returns "    Hello world"

// let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错

/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation