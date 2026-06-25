// Functions:

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