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


function loginUserMessage(username = "BAC"){
    return `${username} Welcome!`
}
console.log(loginUserMessage())