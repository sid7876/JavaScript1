// let user = {
//   username: "hitesh",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username}, welcome to wenbsite`);
//     // console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "sam"; // username context changes means value.
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let userName = "hitesh";
//     console.log(this.userName);
// };

// chai();

// const chai = function(){
//     let userName = "hitesh";
//     console.log(this.userName);
// }

// chai();

// const chai = () => {
//   let userName = "hitesh";
//   console.log(this.userName);
// };

// chai();

// Arrow functions basic syntax () => { };
// Arrow functions can hold into verible const arrowfunc = () => { };

// Arrow function explicite returned. uses return keyword 
// const addTwoNum = (num1, num2)=>{
//     return num1 + num2
// };

// console.log(addTwoNum(3, 6));


// Arrow function implicite returned = one line or short function can be returned in this way.
// const addTwoNum1 = (num1, num2) => num1 + num2;
// console.log(addTwoNum1(3, 6));

// another way of writing.

// const addTwoNum2 = (num1, num2) => (num1 + num2);
// console.log(addTwoNum2(3, 6));

const addTwoNum2 = (num1, num2) => ({userName:"hitesh"});
console.log(addTwoNum2(3, 6));