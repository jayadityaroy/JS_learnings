// callback is a function that is passed as an argument to another function and is executed after some operation has been completed. 
// It allows for asynchronous programming (where operations don't block the execution of subsequent code) and can be used to handle events, such as user interactions or data retrieval.

// without callback, the code execution is synchronous, 
// meaning that each operation must complete before the next one begins. 
// This can lead to blocking behavior, where long-running operations prevent other code from executing.
// Example:

// In this example, the server function simulates a delay in fetching data from a server using setTimeout.
// The fetchDataFromServer function calls the server function and attempts to log the returned data. 
// However, since the server function does not return data immediately, the logged value is undefined.
function server(){
    setTimeout(() => {
        return "Data fetched";
    }, 2000);
}

function fetchDataFromServer(){
    const data = server();
    console.log(data); // This will log undefined because the server function does not return data immediately
}

fetchDataFromServer();
/*---------------------------------------------------------------------------------------------------------------------*/
// with callback, the code execution can be asynchronous, allowing for non-blocking behavior.
// In this example, the serverWithCallback function takes a callback function as an argument.
// After a delay, it calls the callback function (fetchDataFromServerWithCallback) with the fetched data.
// The fetchDataFromServerWithCallback function logs the data to the console after it is received.
function serverWithCallback(callback){
    setTimeout(() => {
        callback("Data fetched"); // The callback function is called with the fetched data after the delay
    }, 2000);
}
function fetchDataFromServerWithCallback(data){
    console.log(data); // This will log "Data fetched" after the delay
}
serverWithCallback(fetchDataFromServerWithCallback); // The fetchDataFromServerWithCallback function is passed as a callback to the serverWithCallback function
// or directly as an anonymous function
// serverWithCallback((data) => {
//     console.log(data); // This will also log "Data fetched" after the delay
// })
/*---------------------------------------------------------------------------------------------------------------------*/
// multiple callbacks can used to handle different situtations like success and error handling.
// Example:
function serverWithMultipleCallbacks(successCallback, errorCallback){
    setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // Randomly determine if the operation is successful
        if (isSuccess) {
            successCallback("Data fetched successfully"); // Call the success callback with the fetched data
        } else {
            errorCallback("Error fetching data"); // Call the error callback with an error message
        }
    }, 2000);
}
serverWithMultipleCallbacks(
    (data) => {
        console.log("Success:", data); // This will log the success message if the operation is successful
    },
    (error) => {
        console.error("Error:", error); // This will log the error message if the operation fails
    }
)
/*---------------------------------------------------------------------------------------------------------------------*/
// callback hell is a situation where multiple nested callbacks are used, leading to code that is difficult to read and maintain.
// Not recommended to use multiple nested callbacks, instead use promises or async/await for better readability and maintainability.
/*---------------------------------------------------------------------------------------------------------------------*/
// callback in array methods like forEach, map, filter, reduce, etc. are used to perform operations on each element of an array.
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number); // The callback function takes each number and returns its square
console.log(squares); // This will log [1, 4, 9, 16, 25] to the console