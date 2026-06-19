// implicit conversion:
let a = 5;
let b = "10";
let c = a + b;
console.log(c); // "510" (number 5 is converted to string "5" and concatenated with "10")

console.log("20" - 10); // 10 (string "20" is converted to number 20 and 10 is subtracted from it)

console.log("5" * 2); // 10 (string "5" is converted to number 5 and multiplied by 2)

console.log(false * 5); // 0 (boolean false is converted to number 0 and multiplied by 5)

// explicit conversion:
let num = 42;
// converting number to string: String(), toString()
let strNum = String(num);
console.log(strNum); // "42"
console.log(typeof strNum); // string
let strNum2 = num.toString(); // another way to convert number to string
console.log(strNum2); // "42"
console.log(typeof strNum2); // string

let str = "123";
// converting string to number: Number(), parseInt(), parseFloat()
let numStr = Number(str);
console.log(numStr); // 123
console.log(typeof numStr); // number
let numStr2 = parseInt(str); // another way to convert string to number
console.log(numStr2); // 123
console.log(typeof numStr2); // number

let floatStr = "3.14";
let floatNum = parseFloat(floatStr);
console.log(floatNum); // 3.14
console.log(typeof floatNum); // number
console.log(parseInt(floatStr)); // 3 (parseInt only returns the integer part of the number)
console.log(Number(floatStr), parseFloat(floatStr)); // 3.14 (Number converts the entire string to a number, including the decimal part)
console.log(parseInt("abc")); // NaN (not a number, because "abc" cannot be converted to a number)

// converting boolean to number: Number()
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// converting number and string to boolean: Boolean()
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false for empty string, null, undefined, 0, NaN and all other values are true