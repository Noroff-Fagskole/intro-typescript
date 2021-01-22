import { helloWorld } from "./hello_world.js";
helloWorld("Halllloooo");
let greet;
greet = () => {
    console.log('Hello world from functions file');
};
greet();
const multiply = (x, y, z) => {
    console.log(x * y);
    console.log(z);
    // :void is returned if function does not return anything
    return x * y;
};
multiply(2, 10, 10);
// ? is an optional param, so if you want to pass in something else
// required params first, optional params last.
const subtract = (a, b) => {
    return a - b;
};
let result = subtract(10, 3); // TS infers the return type from the function so we don't have to be explicit.
console.log("subtracting:", result);
const logErrorToFile = (id, message) => {
    console.log(`Error ${message} has an id of ${id}`);
};
