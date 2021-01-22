"use strict";
// Arrays
let fruit = ['apple', 'banana', 'pear'];
// the types we declare in the array cannot be changed later on
// TSC will not compile.
fruit.push('pineapple');
/*fruit.push(100);
fruit[0] = 200*/
console.log(fruit);
let sizes = [32, 33, 34, 35];
/*sizes.push('six');
sizes[0] = 'six';*/
console.log(sizes);
let mixedTypes = ['six', 32, 9, false, 0, true];
mixedTypes.push('seven');
mixedTypes.push(10);
mixedTypes[0] = 6;
console.log(mixedTypes);
// Explicit Types
let orderIds = []; // always init with an empty array.
//orderIds = [999, 342, 1212, 'one hundred'];
orderIds.push(88);
// union types
let mixedStuff = [];
mixedStuff.push(100);
mixedStuff.push('one hundred');
console.log(mixedStuff);
// can give union types on a variable
let myID;
myID = '1817623816';
myID = 19879872;
