//Seven data types
null
undefined
boolean
number
string
object
symbol


//Operator typeof
console.log(typeof 0) // number
console.log(typeof true) //boolean
console.log(typeof 'JavaScript') // string "", '', `` - literals (Various dynamic data can be transferred)
console.log(typeof undefined) //undefind (used when the variable is not declared, functions that return nothing will also output undefined or or a variable var was declared but without any value)
console.log(typeof {}) // object
console.log(typeof Symbol(description:'JS')) // Symbol
console.log(typeof null) //That is null data type, but in console we will see object (error of typeof operator).The variable is declared but it has no value
console.log(typeof function() {}) //That is object  data type, but in console we will see function (error of typeof operator).
console.log(typeof NaN) //Not a number. console.log(undefind/0), we will see NaN in console.