//Scopes.

// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300; // avoid using var verible to messy to handle. causes unwarranted problems.
// let a = 300;
// if (true) {
//   let a = 10;
//   const b = 20;
// var c = 30;
//   console.log("INNER-SCOPE/LOCAL-SCOPE: ", a);
// }

// console.log("OUTER-SCOPE/GLOBAL-SCOPE: ", a);
// console.log(b)
// console.log(c)

// function one() {
//     const userNameNew="Siddhesh";
//     function two(){
//     const website = "Youtube";
//     console.log(userNameNew);
//     }
//     // console.log(website)
//     two()
// };

// one();

// if (true) {
//   const userName2 = "Hitesh";
//   if (userName2 === "Hitesh") {
//     const website2 = " Youtube";
//     console.log(userName2 + website2);
//   }
//   console.log(website2);
// }

// console.log(userName2);


//+++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1;
};

addOne(5)

addTwo(6)
const addTwo = function (num) {
    return num + 2
}

addTwo(6)