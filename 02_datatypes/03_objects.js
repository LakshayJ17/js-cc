// singleton
// object literals 

// Object.create

const mySym = Symbol("key1")

const myUser = {
    name : "Lakshay",
    "full name" : "Lakshay Jain",
    [mySym] : "mykey2",
    age : 20,
    email : "abc@xyz.in",
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Wed"]
}

console.log(myUser.email);

console.log(myUser["name"]);
console.log(myUser["full name"]);
console.log(myUser[mySym]);


myUser.email = "something@else.com"
// Freezes all exisiting values - no more changes
// Object.freeze(myUser)

// myUser.name = "New name"

// console.log(myUser);


myUser.greeting = function(){
    console.log(`hello user ${this.name}`);
}

console.log(myUser.greeting());