//Dates

// let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate1 = new Date(2023, 0, 23);
// console.log(myCreatedDate1.toLocaleString());
// let myCreatedDate2 = new Date(2023, 0, 23, 5, 2);
// console.log(myCreatedDate2.toLocaleString());
// let myCreatedDate3 = new Date("2024-01-12");
// console.log(myCreatedDate3.toLocaleString());
// let myCreatedDate4 = new Date("1-12-2024");
// console.log(myCreatedDate4.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate1 = new Date();
console.log(newDate1);
console.log(newDate1.getMilliseconds());
console.log(newDate1.getSeconds());
console.log(newDate1.getHours());
console.log(newDate1.getMonth() + 1);
console.log(newDate1.getDay());

// `${newDate1.getDay()} the time is:`

newDate1.toLocaleString('default',{
    weekday:'long',
})

console.log(newDate1.toLocaleString());