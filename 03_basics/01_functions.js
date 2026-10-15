// Functions

// console.log("S");
// console.log("I");
// console.log("D");
// console.log("D");
// console.log("H");
// console.log("E");
// console.log("S");
// console.log("H");

// function sayMyName() {
//   console.log("S");
//   console.log("I");
//   console.log("D");
//   console.log("D");
//   console.log("H");
//   console.log("E");
//   console.log("S");
//   console.log("H");
// };

// sayMyName();

// function exstanicians     // function name  // function parameters
// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// storing into the another verible // function call //functions arguments
//const result =  addTwoNumbers(6, 3);

// function addTwoNumbers(number1, number2) {
//   //   let result = number1 + number2;
//   //   return result;

//   return number1 + number2;
// }

// const result = addTwoNumbers(6, 3);
// console.log("Result:", result);

// function loginUserMessage(userName){
// function loginUserMessage(userName="sam"){
// if (userName === undefined) {
//     if (!userName) {
//         console.log("Please Enter a Username!");
//         return;
//     }
//     return `${userName} Just Logged In`
// }

// console.log(loginUserMessage("Siddhesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());
// console.log(loginUserMessage());
// console.log(loginUserMessage("jay"));

// function calculateCartPrice(num1) {
// // function calculateCartPrice(...num1) {
// function calculateCartPrice(val1, val2,...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400, 300));
// console.log(calculateCartPrice(200, 400, 300, 500, 600));


const user = {
    userName:"Sid",
    price:199
};

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} & price is ${anyObject.price}`)
}

handleObject(user);

handleObject({
    userName:"Sam",
    price:399
});

const newAry = [100, 200, 300, 400, 500];

function handleArray(anyAry){
    return anyAry[1]
};

console.log(handleArray(newAry));
console.log(handleArray([2000, 4000, 6000, 8000, 10000]));