// Object destructure 

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const { courseInstructor: instructor } = course
console.log(instructor);

// {
//     "name" : "Lakshay",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {} , {}, {}
]