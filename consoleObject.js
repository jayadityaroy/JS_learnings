// Console object: used to print any kind of variables defined before in it 
// or to just print any message

// .log(): used to print any kind of variables defined before in it or to just print any message
console.log("Hello, World!");

// .error(): used to print error messages
console.error("This is an error message.");

// .warn(): used to print warning messages
console.warn("This is a warning message.");

// .info(): used to print informational messages
console.info("This is an informational message.");

// .table(): used to display data in a tabular format
let users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];
console.table(users);
/*
┌─────────┬─────────┬─────┐
│ (index) │ name    │ age │
├─────────┼─────────┼─────┤
│ 0       │ 'John'  │ 30  │
│ 1       │ 'Alice' │ 25  │
│ 2       │ 'Bob'   │ 35  │
└─────────┴─────────┴─────┘ 
*/

// .group() and .groupEnd(): used to group related messages together
console.group("User Information");
console.log("Name: John");
console.log("Age: 30");
console.log("City: New York");
console.groupEnd();

// .time() and .timeEnd(): used to measure the time taken by a block of code to execute
console.time("Loop Time");
for (let i = 0; i < 1000000; i++) {
    // some code
}
console.timeEnd("Loop Time");

