// Arrays 

const myArr = [0,1,2,3,true]

const newArr = new Array(1,2,3,4)
console.log(newArr);


console.log(typeof myArr);

// Arrays create shallow copies when copied 

myArr.push(7)
myArr.pop()

myArr.unshift(0)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(8));
console.log(myArr.indexOf(2));  // -1 if not present else gives index - 0 indexed 

const myArr2 = myArr.join()
console.log(typeof myArr2);

// slice and splice 

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // does not change array also last index not included 
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3) // changes the array itself - removes from array and last idx included in ans 
console.log("C ", myArr);
console.log(myn2);







