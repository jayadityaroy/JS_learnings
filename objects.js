// Objects: A collection of properties, where each property is a key-value pair.
// Objects can be created using object literals, constructor functions, or the Object.create() method.
let person = {
    name: "John",
    age: 30,
    isStudent: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
    // shorthand method definition (ES6):
    // greet() {
    //     console.log("Hello, my name is " + this.name);
    // }
}

console.log(person); // { name: 'John', age: 30, isStudent: true, greet: [Function: greet] }
// Accessing object properties:
person.greet(); // Hello, my name is John
console.log(person.name); // John
console.log(person.age); // 30
console.log(person["isStudent"]); // true
console.log(typeof person); // object

// updating and adding properties:
person.age = 31; // updating existing property
person.gender = "male"; // adding new property
console.log(person); // { name: 'John', age: 31, isStudent: true, greet: [Function: greet], gender: 'male' }
// dynamically adding methods to an object:
person.sayGoodbye = function() {
    console.log("Goodbye!");
}
person.sayGoodbye(); // Goodbye!


// deleting properties:
person.willBeDeleted = "This property will be deleted";
console.log(person); // { name: 'John', age: 31, isStudent: true, greet: [Function: greet], gender: 'male', willBeDeleted: 'This property will be deleted' }
delete person.willBeDeleted; // deleting property
console.log(person); // { name: 'John', age: 31, isStudent: true, greet: [Function: greet], gender: 'male' }

// checking if a property exists in an object:
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true


// Nested objects:
let student = {
    name: "Alice",
    age: 22,
    marks: {
        math: "A",
        science: "B",
        history: "A"
    }
}
// Accessing nested object properties:
console.log(student.marks.math); // A
console.log(student["marks"]["science"]); // B

// Object destructuring:
let { name, age, marks } = student;
console.log(name); // Alice
console.log(age); // 22
console.log(marks); // { math: 'A', science: 'B', history: 'A' }