// for of

// ["", "", ""];
// [{}, {}, {}];

// const myAry = [1, 2, 3, 4, 5];
// for (const num of myAry) {
//     console.log(num);
// };

// const greetings = "Hello_World!";
// for (const greet of greetings) {
//     console.log(`Each Character is: ${greet}`)
// }

//Maps

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United States of America");
// map.set("FR", "France");
// map.set("RU", "Russia");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// };

let myObj = {
    "game1":"NFS",
    "game2":"Roadrash",
};

for (const [key, value] of myObj) {
  console.log(key, ":-", value);   
}
