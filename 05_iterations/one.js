// for Loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer Loop Values: ${i}`);
//   for (let j = 1; j <= 10; j++) {
      // console.log(`Inner Loop Values: ${j} and Inner Loop Value: ${i}`);
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }

// const myAry1 = ["flash", "batman","superman"];
// console.log(myAry1.length);

// for (let i = 0; i < myAry1.length; i++) {
//   const element = myAry1[i];
//   console.log(element)
// }

// Special keywords: break and continue.

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected 5`)
//     break; // this key words stopped process immediatly after it executes 
//   }
//   console.log(`Value of i is ${i}`)
// }


for (let j = 1; j <= 20; j++) {
  if (j == 5) {
    console.log(`Detected 5`)
    continue; // this key word exception for one mistake and continue processing.  
  }
  console.log(`Value of j is ${j}`)
}