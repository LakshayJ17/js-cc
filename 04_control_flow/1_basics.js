if (2 !== "2"){
    console.log("Lmao");
}
console.log("lmao 2");

const score = 11
if (score > 10){
    const score = 20
    console.log("Score", score);
}

console.log(score);

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("OK TO BUY");
    
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//  < , > , <= , >= , == , !=, ===, !==


// Truthy and falsy
// falsy values - false, 0, -0, BigInt, 0n, "", null, undefined, NaN
// truthy - "0", 'false', " ",  [], {}, function(){}
const userEmail = "lakshay@gmail.com"

if (userEmail){
    console.log("OK");
} else {
    console.log("NOT OK");
}

// Nullish Coalescing Operator (??)

let val1;
let val2;

val1 = 5 ?? 10
val2 = null ?? 10

console.log(val1); //5
console.log(val2); // 10


//  Ternary operator 

// condition ? true : false

const iceTea = 100

iceTea >= 80 ? console.log("More than 80") : console.log("Less than 80");






