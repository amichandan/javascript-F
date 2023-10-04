const name = "chandan"
const age = 24

//  to concatinate the mordern method is to use backticks `` with ${}.

console.log(` hello my name is ${name} and my age is ${age}`);

// the advantage of using the mordern method is we can use so many prototypes, functions on the go like to touppercase, length, tolowercase, hamding keys, trim etc...

const heroName = new String("shaktiman")
console.log(heroName[0])    // to see the key string
console.log(heroName.__proto__);      //give object

console.log(heroName.length);       //find length
console.log(heroName.toUpperCase()); //convert toupper
console.log(heroName.charAt(4)); //find char at 4th pos
console.log(heroName.indexOf('k')); //find pos of 'k'

const newString = heroName.substring(0, 4)
console.log(newString);
const newStringOne = heroName.slice(0, 4)
console.log(newStringOne);
const newStringtwo = heroName.slice(-8, 4)
console.log(newStringtwo);

const newStringthree = "    iron man    "
console.log(newStringthree);
console.log(newStringthree.trim());  // it will remove the unnecessary whitespaces


const anyUrl = "https://myurl.com/chandan%30ray"
console.log(anyUrl.replace('%30', '-'));  

console.log(anyUrl.includes('chandan'));  // to search the string is present or not.
console.log(anyUrl.includes('name'));
