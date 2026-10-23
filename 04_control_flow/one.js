//Control Flow to control flow of data and memory in js.

// If statement.

// if(condition execute only if conditional statement returns true){

// }

const isUserLoggedIn = true;
const temprature = 41;
// if(isUserLoggedIn){
// if(3 != 2){
//     console.log("first");
// }

// if(3 === "3"){
//     console.log("Equal");
// }else{
//     console.log("Not Equal");
// }

// <, >, <=, >=, ==, !=, === Comparison Operators.

// if(temprature === 41){
//     console.log("temprature is equal to 41");
// }else{
//     console.log("temprature is not equal to 41");
// }

// const score = 200;
// if(score > 100){
//     const power = "Fly";
//     console.log(`User Power is:${power}`)
// }

//Shorthand if implicite statement expression

// const balance = 1000;
// if (balance > 500) console.log("true"), console.log("true");

// if (balance < 500) {
//   console.log("Less than 500");
// } else if (balance < 750) {
//   console.log("Less than 750");
// } else if (balance < 900) {
//   console.log("Less than 900");
// }else {
//     console.log("Less than 1200")
// }

// && condition

// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard && 2 == 2) {
//   console.log("Allow user to buy");
// }

const userLoggedInByGmail = true;
const userLoggedInByEmail = false;

if (userLoggedInByGmail || userLoggedInByEmail) {
  console.log("Allow user to Looged In");
}
