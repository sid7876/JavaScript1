const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc is: ${acc} and currval is: ${currval}`)
//   return acc + currval;
// }, 0);
// console.log(myTotal);

// const myTotal1 = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal1);

const shoppingCart = [
  { itemName: "Js Course", price: 2999 },
  { itemName: "py Course", price: 999 },
  { itemName: "Mobile Dev Course", price: 5999 },
  { itemName: "Data Science Course", price: 12999 },
];

const shoppingTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(shoppingTotal);