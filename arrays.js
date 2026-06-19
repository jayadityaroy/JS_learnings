let numbers = [10, 20, 30, 40, 50];
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