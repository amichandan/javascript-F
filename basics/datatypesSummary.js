// DATATYPES ARE OF TWO TYPES ON THE BASIS OF HOW THE DATA IS STORED IN MEMORY.
// 1. PREMETIVE ALSO CALLED AS CALL BY VALUE TYPES

// 7 TYPES: STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BigInt

// number => 2 to the power 53
// for bigger number we can use => bigint
// string => "" , ''
// boolean => true / false
// null => standalone value
// undefined =>
// symbol => for uniqueness

// EG for symbol
 let Id = Symbol('123')
 let secondId = Symbol('123')
//  check
console.log(Id === secondId); //both are totally different value after strict ckeck also

// 2. NON PREMETIVE ALSO CALLED AS CALL BY REFERENCE TYPES

// 3 TYPES: ARRAY, OBJECTS, FUNCTION

// arrays are stored inside []

const heros =[ "ironman", "hulk", "thor", "chotabheem"];

// object are stored inside {}

const myObject = { 
    name : "chandan",
    age : 25
}

// function

const myFunction = function(){
    console.log("hello world");
}
console.log(myFunction)


//  TYPEOF => to find type of data

console.log(typeof myFunction);      //function
console.log(typeof myObject);        //object 
console.log(typeof heros);          //object
console.log(typeof Id);             //symbol  
console.log(typeof null);           //object
console.log(typeof undefined);      //undefined

