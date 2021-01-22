"use strict";
let myName = "Mannuel"; // string
let orderNumber = 100; // Number
let isDelivered = true; // Boolean
// Explicit types
// declare var with no value.
let userName;
let userId;
let isAdmin;
myName = "John";
//orderNumber = "One hundred"
//isDelivered = "Yes is its delivered"
console.log(myName);
console.log(orderNumber);
console.log(isDelivered);
/*
    01. TypeScript use strict types, JavaScript does not.
    this means once you have declared a variable of some type
    it will forever stay that type, e.g. string

    TypeScript uses inference, so we don't have to explicitly tell TS what type the variable is.
     it infers what type a variable is based on the value you entered in it (number, string, boolean)
*/
// define the type it must be when we add something to it.
// the error check is not done in the browser
// it done at compile time right after you type it and the error is shown in the console, catch bugs before they happen.
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
console.log(addNumbers(10, 10));
// Any types
// only use in rare cases when you might not know what a variable be
let order_date = 22;
order_date = 99;
order_date = { dates: "today" };
console.log(order_date);
// use it sparingly if at all because it reverses what TS is doing for you.
