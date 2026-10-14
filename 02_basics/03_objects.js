//Objects

//singleton Object = constructor..
//Object.create

const mySym = Symbol("key1");
// console.log("mySym datatype is: ",typeof mySym,"", mySym);

//multiple object = literals.
const myObj = {
  name: "Siddhesh",
  full_Name: "Siddhesh B Patil",
  // mySym:"key1",
  [mySym]: "key1",
  age: 20,
  location: "Thane",
  email: "example@mail.com",
  isLoggedIn: false,
  daysOfLogIn: ["monday", "saturday"],
};

// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj["full_Name"]);
// console.log(typeof(myObj["mySym"]));
// console.log(myObj[mySym]);
// console.log(typeof myObj[mySym]);

// myObj.email = "myemail@example.com";
// console.log(myObj);

// Object.freeze(myObj);
// myObj.email = "myemail@example.com";
// console.log(myObj);

myObj.greetings = function () {
  console.log("Hello World!");
};

// console.log(myObj.greetings); // function referance. not actual full function
console.log(myObj.greetings());

myObj.greetings2 = function () {
  console.log(`Hello World, ${this.name}`);
};

console.log(myObj.greetings2());


