// let score = 33;
// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true/false;

// console.log(typeof score)
// console.log(typeof(score))

// let valueInNumber = Number(score); // This line converts the string value of score to a number using the Number() function and assigns it to the variable valueInNumber.
// console.log(valueInNumber)
// console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1
// false => 0

// let isLoggedIn = 1; // This line declares a variable isLoggedIn and assigns it the value 1, which is a number.
// let isLoggedIn = ""; // This line declares a variable isLoggedIn and assigns it the value "", which is an empty string.
// let isLoggedIn = "Siddhesh"; // This line declares a variable isLoggedIn and assigns it the value "Siddhesh", which is a string.
// let booleanIsLoggedIn = Boolean(isLoggedIn); // This line converts the number value of isLoggedIn to a boolean using the Boolean() function and assigns it to the variable booleanIsLoggedIn.
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn)

// in Boolean conversion
// 1 => true
// 0 => false
// "" => false
// "Siddhesh" => true

// let someNumber = 33; // This line declares a variable someNumber and assigns it the value 33, which is a number.
// console.log(someNumber);
// console.log(typeof someNumber);
// let stringNumber = String(someNumber); // This line converts the number value of someNumber to a string using the String() function and assigns it to the variable stringNumber.
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **********************************operations********************************************

// let value = 3;
// let negValue = -value; // This line negates the value of the variable value and assigns it to the variable negValue.
// console.log(negValue);
// console.log(typeof negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

// let str1 = "Hello";
// let str2 = " Siddhesh";
// let str3 = str1 + str2; // This line concatenates the string values of str1 and str2 using the + operator and assigns it to the variable str3.
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(((3 + 4) * 5) % 3);

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1, num2, num3);

let gameCounter = 100;
++gameCounter; // This line increments the value of the variable gameCounter by 1 using the pre-increment operator (++). The pre-increment operator increases the value of the variable before it is used in any expression.
console.log(gameCounter);

let gameCounter1 = 100;
gameCounter1++; // This line increments the value of the variable gameCounter1 by 1 using the post-increment operator (++). The post-increment operator increases the value of the variable after it is used in any expression.
console.log(gameCounter1);