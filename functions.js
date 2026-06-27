// Functions: 
// in js they are a objects, so they can be assigned to variables, passed as arguments to other functions, and returned from other functions.

function myFunction() {
    console.log("Hello World!");
}
console.log(`calling myFunction(): `); 
myFunction(); // calling myFunction() Hello World!

// Function with parameters
function greet(name = "Guest") { // default parameter value is "Guest"
    console.log(`Hello, ${name}!`);
}
console.log(`calling greet(), with a parameter: `);
greet("John"); // Hello, John!
console.log(`calling greet(), without a parameter: `);
greet(); // Hello, Guest!

// Functions with Objects as parameters
function displayUserInfo({name = "Guest", age = "Unknown", city = "Unknown"} = {}) { // default parameter value is an empty object
    console.log(`User Info: Name - ${name}, Age - ${age}, City - ${city}.`);
}
let userInfo = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
}
displayUserInfo(userInfo); // User Info: Name - Alice, Age - 25, City - Los Angeles.

// function with unknown number of parameters using rest parameters
function sum(...numbers) {
    let sum = 0;
    for(number of numbers) {
        sum += number;
       
    }
    console.log(`sum: ${sum}`);
}
sum(1,2); // sum: 3
sum(1,2,3,4,5); // sum: 15

// function doesn't see the type of arguments passed to it, it just sees the values. So, we can pass any type of arguments to a function and it will work as expected.
function displayType(value){
    console.log(`Type of ${value} is ${typeof value}`);
} 
displayType(42); // Type of 42 is number
displayType("Hello"); // Type of Hello is string
displayType(true); // Type of true is boolean

// function with return value
function giveUserInfo(name, age){
    // returning an object with name and age properties
    return {
        userName: name,
        userAge: age
    }
}
console.log(`calling giveUserInfo() with parameters: `);
let {userName, userAge} = giveUserInfo("Bobby", 30); // destructuring the returned object
console.log(`User Info: Name - ${userName}, Age - ${userAge}.`); // User Info: Name - Bob, Age - 30.

// Function Expression
// here we are assigning a an anonymous function to a variable called multiply.
// we can't use the multiply variable before the function expression is defined (unlike function declarations), 
// because of hoisting. Function expressions are not hoisted.
const multiply = function(a, b) {
    return a * b;
}
console.log(`calling using multiply() function expression: `);
console.log(`multiply(2, 3): ${multiply(2, 3)}`); // multiply(2, 3): 6

// Arrow Functions
// Arrow functions are a more concise way to write functions in JavaScript. They are always anonymous and change the way this binds in functions.
const divide = (a, b) => a / b; // returns the result of a / b
console.log(`calling using divide() arrow function: `);
console.log(`divide(6, 2): ${divide(6, 2)}`); // divide(6, 2): 3
