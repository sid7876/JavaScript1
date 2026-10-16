// Immediately Invoked Function Expressions.(IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();

// ( Function Definition )( Function Execution )

// Regular-Named function / Named IIFE
(function chai2() {
  console.log(`DB CONNECTED`);
})();

// Arrow Function = Unnamed IIFE.
// (() => {
//   console.log(`DB CONNECTED TWO`);
// })();

// Arrow Function with Parameter IIFE.
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("SIDDHESH");