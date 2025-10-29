// global vs local scope 


// {} -> scope 

var c = 100
let a = 200

if (true) {
    let a = 10
    const b = 20

    // console.log("INNER : ", a)
}

// console.log(a); //error if let a is not there in global scope, if let a = 200 in global scope then ans = 200
// console.log(b); //error
// console.log(c); // undefined


//  child can get parents value but parent cant of children
function one(){
    const username = "Lakshay"
    
    function two(){
        const username = "Lakshay Jain"
        const website = "Chaicode"

        console.log("INSIDE INNER FUNCTION : ", username); // Lakshay Jain
        console.log("INSIDE INNER FUNCTION : ", website); //chaicode
        
    }
    two()
    console.log("AFTER INNER FUNCTION : ", username); // Lakshay
    // console.log("AFTER INNER FUNCTION : ", website); -> this gives error 
    
}

one()

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}

console.log(addOne(5));

// addTwo(6) ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(addOne(5)))


