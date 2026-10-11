// # Primitive Data Types in JavaScript
// JavaScript has 7 primitive data types:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// const score = 100; // Number
// const scoreNumber = 100.5; // Number

// const isLoggedIn = true; // Boolean
// const outSideTemp = null; // Null

// let userEmail = undefined; // Undefined
// let userEmail; // Undefined

// let id = Symbol("123"); // Symbol
// let anotherId = Symbol("123"); // Symbol

// console.log(id === anotherId); // false

// const bigNumber = 1234567890123456789012345678901234567890n; // BigInt


// # Reference Data Types in JavaScript(non-primitive data types).
// javascript has 3 reference data types:
// 1. Object
// 2. Array
// 3. Function. 

// const heros = ["shaktiman", "naagraj", "doga"]; // Array
// let myObj = {
//     name: "shaktiman",
//     age: 30,
//     isLoggedIn: true
// }

// const myFunction = function() {
//     console.log("Hello World");
// }

// console.log(typeof myFunction); // function


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// # Stack Memory vs Heap Memory in JavaScript
// primitive (store in stack memory) vs reference (store in heap memory) data types

// let myName = "shaktiman"; // stored in stack memory
// let myName2 = myName; // stored in stack memory   
// myName2 = "naagraj"; // stored in stack memory
// console.log(myName) //
// console.log(myName2)


let userOne = {
    email: "userOne@gmail.com",
    upiId:"userOne@ybl"
};

let userTwo = userOne;

userTwo.email = "userTwo@gmail.com";


console.log(userOne.email);
console.log(userTwo.email);