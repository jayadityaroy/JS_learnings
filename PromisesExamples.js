// Promises: It's a modern alternative to callbacks for handling asynchronous operations in JavaScript. 
// Promises provide a more structured and readable way to handle asynchronous code, 
// allowing for better error handling and chaining of operations.

/*
Promises have three states:
    Pending: the task has started, but the result is not ready yet.
    Fulfilled: the task completed successfully.
    Rejected: the task failed.
General working:
    You create a Promise when you start an async task.
    While the task is running, the Promise stays pending.
    If the task succeeds, it calls resolve and becomes fulfilled.
    If the task fails, it calls reject and becomes rejected.
    Then you handle the result using then for success, catch for errors, and finally for code that should run in both cases.
*/
// In this example, the serverWithPromise function returns a Promise that simulates a delay in fetching data from a server using setTimeout.
console.log("Example of Promises in JavaScript:");
function serverWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // Randomly determine if the operation is successful
            if (isSuccess) {
                resolve("Data fetched successfully"); // Resolve the promise with the fetched data
            } else {
                reject("Error fetching data"); // Reject the promise with an error message
            }
        }, 2000);
    })
}
// serverWithPromise()
//     .then((data) => {
//         console.log("Success:", data); // This will log the success message if the operation is successful
//     })
//     .catch((error) => {
//         console.error("Error:", error); // This will log the error message if the operation fails
//     })
//     .finally(() => {
//         console.log("Operation completed"); // This will log a message indicating that the operation has completed, regardless of success or failure
//     });

/*---------------------------------------------------------------------------------------------------------------------*/

// Multiple Promises 
let promise1 = serverWithPromise();
let promise2 = serverWithPromise();
let promise3 = serverWithPromise();
// console.log("Waiting for all promises to complete:");
// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log("All promises fulfilled:", results); // This will log the results of all fulfilled promises
//     })
//     .catch((error) => {
//         console.error("One or more promises rejected:", error); // This will log an error message if any of the promises are rejected
//     });

console.log("Race between promises:");
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("First promise fulfilled:", result); // This will log the result of the first fulfilled promise 
    })
    .catch((error) => {
        console.error("First promise rejected:", error); // This will log an error message if the first promise is rejected
    });