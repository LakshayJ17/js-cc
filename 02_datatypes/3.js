// why string to number conversion is confusing

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

//  string first -> treat whole as string
// if string in last the operations are done

console.log(true) // true
console.log(+true) // 1
console.log(+""); //  0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// prefix and postfixx operator 
let gameCounter = 100
++gameCounter
console.log(gameCounter)

// ++x (pre-increment) increments the variable before its value is used in the expression, while x++ (post-increment) uses the original value and increments the variable afterward. Both operators add \(1\) to the variable's value

