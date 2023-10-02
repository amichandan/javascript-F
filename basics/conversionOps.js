let score = 49
console.log(score)
console.log(typeof score)


let score1 = "49"
console.log(score1)
console.log(typeof score1)


let valueInNumber = Number(score1)
console.log(score1)
console.log(typeof valueInNumber)

let score2 = "43ab"
console.log(score2)
console.log(typeof score2)

let valueInNumber2 = Number(score2)
console.log(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)   //  NaN

// in JS if we use the datatype 'Number' for conversion it will convert any thing into number
// but dont rely on this conversion because sometimes the actual value is not number


let aString = "chandan"
let convertString = Number(aString)
console.log(aString)
console.log(typeof aString)
console.log(typeof convertString)
console.log(convertString)


let score3 = null
let valueInNumber3 = Number(score3)
console.log(score3)
console.log(typeof score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)


let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(score4)
console.log(typeof score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)


let score5 = true
let valueInNumber5 = Number(score5)
console.log(score5)
console.log(typeof score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)


let score6 = false
let valueInNumber6 = Number(score6)
console.log(score6)
console.log(typeof score6)
console.log(typeof valueInNumber6)
console.log(valueInNumber6)


//"50" => 50
//"50ab" => NaN   ;  but type is number
//true => 1
//false => 0  
//null => 0
//undefined => NaN  ;  type = number



//BOOLEAN CONVERSION//

let anyValue = 1
let booleanConversion = Boolean(anyValue)
console.log(anyValue)
console.log(typeof anyValue)
console.log(booleanConversion)
console.log(typeof booleanConversion)


let anyString = "chandan"
let BooleanConversion = Boolean(anyString)
console.log(anyString)
console.log(typeof anyString)
console.log(BooleanConversion)
console.log(typeof BooleanConversion)


let emptyString = ""
let BooleanConvert = Boolean(emptyString)
console.log(emptyString)
console.log(typeof emptyString)
console.log(BooleanConvert)
console.log(typeof BooleanConvert)


//1 => true    ; type = boolean
//"" => false
//"chandan" => true  ; type = boolean




// STRING CONVERSION //

//same goes with string conversion also//

let anynumber = 32
let stringConvert = String(anynumber)
console.log(anynumber)
console.log(typeof anynumber)
console.log(stringConvert)
console.log(typeof stringConvert)