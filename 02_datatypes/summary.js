// Datatypes - primitive and non primitive

// Primitive - 7 types : String , Number, Boolean, null, undefined, Symbol, BigInt

const score = 10
const scoreValue = 100.3

const isLoggedIn = true
const temp = null
let userEmail

const id = Symbol('112')
const anotherId = Symbol('112')

console.log(id)
console.log(anotherId)
console.log(id == anotherId)
console.log(id === anotherId)

const bigNumber = 363927342657326n
console.log(bigNumber)

// Reference / non primitive - Array, Objects, Functions

const cricketers = ["virat", "rohit", "dhoni", "sachin"]

let myObj = {
    name : "Lakshay",
    age : 20
}


const func = function (){
    console.log("Hello function");
}
func()

console.log(typeof bigNumber);
console.log(typeof func);
console.log(typeof cricketers);
console.log(typeof null)
console.log(typeof userEmail);
console.log(typeof temp);
console.log(typeof scoreValue);





