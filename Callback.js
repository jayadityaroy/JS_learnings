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
