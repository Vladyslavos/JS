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

// Type casting

let language = "JavaScript"

if (language) {
	console.log("The best language is "language);
}

'', 0, null, undefined, NaN, false //Falsy values


// String and numbers
console.log(1 + '2') //string 12
console.log('' + 1 + 0) //string 10
console.log('' -1 + 0) // -1
console.log('3' * '8') // 24 number
console.log(4 + 10 + 'px') //14px
console.log('px' + 5 + 10) //px510 string
console.log('42' - 40) // 2
console.log('42px' - 2) // NaN
console.log(null + 2) // 2
console.log(undefined + 33) // NaN


// == vs ===

console.log(2 == '2') // Will be true
console.log(2 === '2') // Will be false, because JavaScript leads to one type as compare by values
console.log(null == undefined) //true
console.log(null === undefined) //false
console.log('0' == false) //true
console.log('0' == 0) //true
console.log('0' === 0) //false

//Ambiguous comparisons
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {}) //false
console.log(0 == null) //false
