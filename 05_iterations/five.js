//forEach Loop.

// const coding = ["js","ruby", "java", "python", "cpp"];

// coding.forEach(function(value){
//     console.log(value);
// });

// coding.forEach(element => {
//     console.log(element)
// });

// function printMe(item) {
//     console.log(item);
// };

// coding.forEach(printMe);

// coding.forEach((item, index,arr)=>{
//     console.log(item, index, arr)
// });

const myCoding =[
    {languageName: "Javascript",
     languageFileName:"js"   
    },
    {languageName: "Java",
     languageFileName:"java"   
    },
    {languageName: "Python",
     languageFileName:"py"   
    },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName,":", item.languageName)
})