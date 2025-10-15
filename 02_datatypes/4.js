// Comparisons of datatypes in js 

// Problem occurs when we compare value of different data types

console.log("2" > 2); // false

console.log(null > 0); // false
console.log(null == 0); //false - not converted for == and === , so null is closely equal to undefined 
console.log(null >= 0); // true - null got converted to 0 

console.log(undefined == 0); // False
console.log(undefined < 0); // false 
console.log(undefined >= 0); // false

// Strict check -> ===

console.log("2" === 2);  // false ->  this checks for both value and data type 
console.log("2" == "2"); // true




