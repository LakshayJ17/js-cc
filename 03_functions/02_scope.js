// global vs local scope 


// {} -> scope 

var c = 100
let a = 200

if (true) {
    let a = 10
    const b = 20

    console.log("INNER : ", a)
}

console.log(a); //error if let a is not there in global scope, if let a = 200 in global scope then ans = 200
// console.log(b); //error
console.log(c); // undefined