const name = "lakshay "
const repoCount = 100

console.log(name +  repoCount + " Value")

// string interpolation
console.log(`Hello my name is ${name} and repo count is ${repoCount}`)

const game = new String('BGmi')
console.log(game);
console.log(game[0]);
console.log(game.__proto__);

console.log(game.length);
console.log(game.toLowerCase());
console.log(game.charAt(1));
console.log(game.indexOf('i') +1);

const newStr = game.substring(0,2)
console.log(newStr);


const veryNewStr =  game.slice (-1,1)
console.log(veryNewStr);

const str2 = "    he-l-lo      "
console.log(str2.trim())

console.log(str2.replace('e', '-'))

console.log(str2.includes('el'));

console.log(str2.split('-'));


