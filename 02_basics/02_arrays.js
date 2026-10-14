const marvel_heros = ["ironman", "thor", "spiderman"];
// console.log(marvel_heros);

const dc_heros = ["superman", "batman", "flash"];
// console.log(dc_heros);

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const new_heros = marvel_heros.concat(dc_heros);
// console.log(new_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(newArray);

// const real_another_array = newArray.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("Siddhesh"));
// console.log(Array.from("Siddhesh"));
// console.log(Array.from("Siddhesh").length);
// console.log(Array.from({name:"Siddhesh"})); // interesting Scenarios


let score1 = 100;
let score2 = 200;
let score3 = 300;

const conArray = Array.of(score1, score2, score3);
console.log(conArray);