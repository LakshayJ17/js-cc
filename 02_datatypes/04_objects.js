const user = new Object() // singleton object 
// const user = {}  -> non singleton object

user.id = "id123"
user.name = "XYZ"

const userTwo = {
    email: "xyz@google.in",
    fullname: {
        userfullname: {
            firstname: "lakshay",
            lastname: "jain"
        }
    }
}

// console.log(userTwo.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 2: "a", 3: "a" }
obj4 = {10 : 10, 4 : "h", 5 : "i"}
// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'a', '3': 'a' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4) // { '1': 'a', '2': 'a', '3': 'a', '4': 'h', '5': 'i', '10': 10 }

const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);


const users = [
    {
        id :  1,
        name : "Lakshay"
    },
    {
        id :  2,
        name : "Laksh"
    },
    {
        id :  3,
        name : "Laksha"
    },
    {
        id :  4,
        name : "Laks"
    },
]

console.log(users[1].name);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLogged'));

// console.log(user);
