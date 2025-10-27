function sayMyName() {
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
}
sayMyName()


function addTwoNums(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2
}
console.log(addTwoNums(2, 3));
console.log(addTwoNums(2, "w"));


function loginUserMessage(username = "BAC") {
    return `${username} Welcome!`
}
console.log(loginUserMessage())

function CalculateCarPrice(...num1) {
    return num1
}
console.log(CalculateCarPrice(200, 400, 500));

const user = {
    username: "Lakshay",
    email: "random@gmail.com",
    price: 200
}

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.username} and email is ${anyObj.email}`)
}

handleObj(user)

const newArray = [100, 29, 8282, 3829]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray))