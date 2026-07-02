let numbers = [10, 20, 30, 40, 50, 64];
console.log(numbers);  // [10, 20, 30, 40, 50]

let fruits = ["apple", "banana", "cherry", "date", "dingle berry"];
console.log(fruits);  // ["apple", "banana", "cherry", "date", "dingle berry"]

// methods:
// push: adds an element to the end of the array
// pop: removes the last element from the array
// shift: removes the first element from the array
// unshift: adds an element to the beginning of the array
// length: returns the number of elements in the array
// slice: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

numbers.push(60);
console.log("Numbers after push:", numbers);  // [10, 20, 30, 40, 50, 60]
numbers.pop();
console.log("Numbers after pop:", numbers);  // [10, 20, 30, 40, 50]
fruits.shift();
console.log("Fruits after shift:", fruits);  // ["banana", "cherry", "date", "dingle berry"]
fruits.unshift("avocado");
console.log("Fruits after unshift:", fruits);  // ["avocado", "banana", "cherry", "date", "dingle berry"]
console.log("Length of numbers array:", numbers.length, " and Length of fruits array:", fruits.length);  // Length of numbers array: 5 Length of fruits array: 5
let slicedNumbers = numbers.slice(1, 4);
console.log("Sliced numbers (1, 4):", slicedNumbers); // Sliced numbers (1, 4): [20, 30, 40]
fruits.splice(2, 1, "blueberry"); // 2 is the index to start at, 1 is the number of elements to remove, and "blueberry" is the element to add
console.log("Fruits after splice:", fruits);  // ["avocado", "banana", "blueberry", "date", "dingle berry"]

// map: creates a new array populated with the results of calling a provided function on every element in the calling array
let doubledNumbers = numbers.map(function(nums){
    return nums*2;
});
console.log("Doubled numbers:", doubledNumbers);  // [20, 40, 60, 80, 100]
// can also pass the already defined function to map
// can also use arrow function syntax for map:
// let squaredNumbers = numbers.map((nums) => nums * nums);

// filter: creates a new array with all elements that pass the test implemented by the provided function
let evenNumbers = numbers.filter(nums => nums % 2 === 0);
console.log("Even numbers:", evenNumbers);  // [10, 20, 30, 40, 50, 64]

// reduce: executes a reducer function on each element of the array, resulting in a single output value
let sumOfNumbers = numbers.reduce((totSum, currNum) => totSum + currNum, 7);  // 7 is the initial value of the accumulator/totSum
console.log("Sum of numbers with initial value 7:", sumOfNumbers);  // 221

// forEach: executes a provided function once for each array element
numbers.forEach((nums) => console.log("Number:", nums));  // Number: 10, Number: 20, Number: 30, Number: 40, Number: 50, Number: 64

// find: returns the value of the first element in the array that satisfies the provided testing function
console.log("First number greater than 30:", numbers.find(nums => nums > 30));  // First number greater than 30: 40

// some: tests whether at least one element in the array passes the test implemented by the provided function
console.log("Is there any number less than 0? ", [-1, 2, 3, 4, 0].some(nums => nums < 0));  // Is there any number less than 0?  true
// every: tests whether all elements in the array pass the test implemented by the provided function
console.log("Are all numbers greater than 0? ", [-1, 2, 3, 4, 0].every(nums => nums > 0));  // Are all numbers greater than 0?  false

// concat: merges two or more arrays and returns a new array
console.log("Concatenated array: ", numbers.concat([70, 80, 90]));  // Concatenated array:  [10, 20, 30, 40, 50, 64, 70, 80, 90]

// slice: returns a shallow copy of a portion of an array into a new array object, selected from start to end (end not included)
console.log("Sliced array: ", [10, 20, 30, 40, 50, 64, 70, 80, 90].slice(2, 5));  // Sliced array:  [30, 40, 50]

// splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
["Apple", "Banana", "Cherry", "Date"].splice(1, 2, "Blueberry", "Cantaloupe");  // removes 2 elements starting from index 1 and adds "Blueberry" and "Cantaloupe"
console.log("Array after splice: ", ["Apple", "Banana", "Cherry", "Date"]);  // Array after splice:  ["Apple", "Blueberry", "Cantaloupe", "Date"]

// join: joins all elements of an array into a string
let joinedString = ["Apple", "Banana", "Cherry", "Date"].join(", "); 
console.log("Joined array: ", joinedString);  // Joined array:  Apple, Banana, Cherry, Date

// reverse: reverses the order of the elements in an array
console.log("Reversed array: ", [10, 20, 30, 40, 50].reverse());  // Reversed array:  [50, 40, 30, 20, 10]

// sort: sorts the elements of an array in place and returns the sorted array
console.log("Sorted array: ", [50, 20, 40, 10, 30].sort((a, b) => a - b));  // Sorted array:  [10, 20, 30, 40, 50]
// Negative (< 0): put a before b
// Positive (> 0): put a after b
// Zero (=== 0): keep their relative order (equal for sorting)
