// Template Literals: Template literals are string literals allowing:
//                      embedded expressions, use multi-line strings and string interpolation

let name = "John";
let age = 30;
let city = "New York";

// using normal string concatenation
let greeting1 = "Hello, my name is " + name + ". I am " + age + " years old and I live in " + city + ".";
console.log(greeting1);

// using template literals
let greeting2 = `Hello, my name is ${name}. I am ${age} years old and I live in ${city}.`;
console.log(greeting2);

// multi-line strings using template literals
let multiLineString = `This is a multi-line string.
It can span multiple lines without the need for concatenation.
Template literals make it easy to create such strings.`;
console.log(multiLineString);

// using expressions inside template literals
let a = 5;
let b = 10;
let sumString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumString);

// Using template literals for objects
let user = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
let userInfo = `User Info: Name - ${user.name}, Age - ${user.age}, City - ${user.city}.`;
console.log(userInfo);

// Using template literals for arrays
let fruits = ["Apple", "Banana", "Cherry"];
let fruitList = `Fruits: ${fruits.join(", ")}.`;
console.log(fruitList);
console.log(fruits);

// Escaping backticks in template literals
let escapedString = `This is a backtick: \``;
console.log(escapedString);