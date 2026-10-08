const accountId = 144553; // This variable is declared using const, which means it cannot be reassigned. It is a constant value that will remain the same throughout the program.
let accountEmail = "example@mail.com"; // This variable is declared using let, which has block scope and provides better control over variable declarations.
var accountPassword = "123456"; // This variable is declared using var, which has function scope and can lead to unexpected behavior.
accountCity = "Thane"; // This variable is declared without var, let, or const, so it will be treated as a global variable (not recommended).
let accountState; // This variable is declared but not initialized, so it will be undefined.
accountState = null; // This variable is explicitly set to null, indicating that it has no value.

accountEmail = "example2@mail.com"; // This variable is reassigned a new value, which is allowed because it was declared using let.
accountPassword = "654321"; // This variable is reassigned a new value, which is allowed because it was declared using var.
accountCity = "Mumbai"; // This variable is reassigned a new value, which is allowed because it was declared without var, let, or const (not recommended).

/*
Prefer not to use var for variable declaration. Use let and const instead.
beacause var has function scope and can lead to unexpected behavior, while let and const have block scope and provide better control over variable declarations.
*/

// accountId = 123456; // This will throw an error because accountId is a constant and cannot be reassigned.
console.log(accountId); // This will print the value of accountId to the console.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // This will print the values of the variables in a table format to the console.
