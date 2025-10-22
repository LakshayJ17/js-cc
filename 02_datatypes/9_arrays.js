const arr1 = [1,2,3,4,3]
const arr2 = [4,23,2]

// arr1.push(arr2)

// const arr3 = arr1.concat(arr2)
// console.log(arr3)

const arr4 = [...arr1, ...arr2]
console.log(arr4);


const arr5 = [1,3,3,222, 232, [4,45,33,2], 432, [38104,3323,[38,342,44]]]
const arr6 = arr5.flat(Infinity)
console.log(arr6);


console.log(Array.isArray("Lakshay"))
console.log(Array.from("Lakshay"))
console.log(Array.from({name : "Lakshay"})) // empty array - []

let score1 = 100
let score2 = 332
let score3 = 910

console.log(Array.of(score1, score2, score3))