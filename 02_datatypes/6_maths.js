const score = 404

const balance = new Number(440)

console.log(balance.toFixed(2));
console.log(balance.toString().length);

const otherNum = 627.17282
console.log(otherNum.toPrecision(3))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.abs(-20.2));
console.log(Math.round(4.3));
console.log(Math.ceil(4.1))
console.log(Math.floor(4.1))
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min)