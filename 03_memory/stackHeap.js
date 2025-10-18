// Stack (used by Primitive) = get copy of variable
// Heap (Non primitive use ) - get reference of variable - any change directky affect variable 

let name = "Lakshay"

let anotherName = name 
anotherName = "Lakshay Jain"

console.log(name); //Lakshay
console.log(anotherName); //Lakshay Jain

let userOne = {
    name : "Lakshay",
    college : 'GD Goenka',
    email :"lakshay@gmail.com"
}

let userTwo = userOne

userTwo.email = "lakshay@gdgu.org" 

// Same for both because of heap
console.log(userOne.email);
console.log(userTwo.email);
