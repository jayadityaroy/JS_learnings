// variable: a container for storing data values
// can create a variable using var, let, or const keywords
// var: can be re-assigned and re-declared, has function scope, not recomended
// let: can be re-assigned but not re-declared, has block scope
// const: cannot be re-assigned or re-declared, has block scope

// Datatypes:

// Primitives:
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let nullValue = null; // null: represents the intentional absence of any object value
let undefinedValue; // undefined: represents the absence of a value

// Reference:
// object:
let user={
    name:"John",
    age:30
}
// array: 
let arr=[1,2,3,4,5];

console.log(age);
console.log(user.name);
console.log(arr[1]);
console.log(typeof nullValue); // object

/**
 * JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type can change at runtime. This allows for flexibility but also requires careful handling to avoid type-related errors.
 */
let variable;
console.log(typeof variable); // undefined
variable = "Hello";
console.log(typeof variable); // string
variable = 42;
console.log(typeof variable); // number
