// since 7 jan, 1970

let myDate = new Date()
console.log(myDate.toISOString())
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myNewDate = new Date(2025, 9,21)
console.log(myNewDate.toDateString());

let newDate = new Date("10-21-2025")
console.log(newDate.toLocaleDateString());
console.log(newDate.getTime());


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000))

