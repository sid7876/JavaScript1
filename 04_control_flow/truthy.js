// const userEmail = "s@gmail.com";
// const userEmail = "";
// const userEmail = [];

// if (userEmail) {
//   console.log("Got the user email");
// } else {
//   console.log("Don't have user email");
// }

// falsy Values: false, 0, -0,  BigInt = 0n, "", null, undefined, NaN these are the falsy values in javascript treated in condition.

// truthy Values: "0", "false"," ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is Empty")
// }

const emptyObj = {};

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is Empty")
// }

// const emptyObj1 = { name: "sid", age: 12, email: "sid@gmail.com", price: 999 };
// const objToArray = new Array(emptyObj1);
// console.log(objToArray);
// objToArray.push({ name: "sumo", age: 10, email: "sumo@gmail.com", price: 11 });
// console.log(objToArray);
// console.log(objToArray.length);

// in browser console tested 

// 0 == ""
// true

// false == 0
// true

// false == ""
// true

// Nullish Coalescing Operator (??): null or undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = undefined ?? 20 ?? 25 ;

// console.log(val1);


// terniary operator;

// condition ? true statement : false statement

const iceTeaPrice = 100;
iceTeaPrice <= 80 ?console.log("Less than 80"):console.log("More than 80");
