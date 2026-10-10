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

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "shaktiman",
    age: 30,
    isLoggedIn: true
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction); // function