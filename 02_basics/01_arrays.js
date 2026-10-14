//Array

// const ary1 = [1, 2, "Seen", true];
// console.log(ary1);
// console.log(typeof ary1);

// const ary2 = ["Shaktiman", "junior-G", "Sea-Hawks"];
// console.log(ary2);

const ary3 = new Array(0, 1, 2, 3, 4, 5);
console.log(ary3);
// console.log("ary3 length is: "+ary3.length);
// console.log("ary3's first element is: "+ary3[0]);

// Arrays Methods
// ary3.push(6);
// ary3.push(7);
// console.log(ary3);

// ary3.pop();
// console.log(ary3);

// ary3.unshift(8);
// console.log(ary3);

// ary3.shift();
// console.log(ary3);

// console.log(ary3.includes(2));
// console.log(ary3.indexOf(2));

// const ary4 = ary3.join();
// console.log(ary4);
// console.log(typeof ary4);

// console.log("A: ", ary3)

const ary5 = ary3.slice(1, 4);
console.log("the ary3 returned after slicing range from 1 to 4: " + ary5);
// console.log(typeof ary5);

// console.log("B: ", ary3);

const ary6 = ary3.splice(1, 4);
console.log("the ary3 returned after splicing range from 1 to 4: " + ary6);
