const user = {
    username: "Lakshay",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username}, Welcome to website`)
        // console.log(this) // {username : 'Lakshay', price : 999, welcomeMessage : [Function : welcomeMessage]}
    }
}

user.welcomeMessage()

// console.log(this); // {}

// this is used in objects not functions 
function chai() {
    let username = "Lakshay Jain"
    console.log(this.username); // undefined

}
chai()


// Implicit return , use return with {} , dont use return with ()
// const add = (num1, num2) => (num1 + num2)

// to return object it must be wrapped in ()
const add = (num1, num2) => ({ username: "Lakshaay" })

console.log(add(2, 2));
