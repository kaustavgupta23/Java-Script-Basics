// JAVASCRIPT PROMISES - COMPLETE TUTORIAL

/*
========== What is a Promise? ==========
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

========== Promise States ==========
- pending: initial state, neither fulfilled nor rejected
- fulfilled: operation completed successfully (resolved)
- rejected: operation failed

========== Common Use Cases ==========
- Database calls
- Network requests (API calls)
- File operations
- Cryptography operations
- Any asynchronous task

Note: Most of the time, promises are consumed rather than created
*/

// ========== BASIC PROMISE SYNTAX ==========

/*
Creating a Promise:
new Promise(function(resolve, reject) {
    // Asynchronous operation
    if (success) {
        resolve(data); // Call when operation succeeds
    } else {
        reject(error); // Call when operation fails
    }
});

Consuming a Promise:
promise
    .then(function(data) { }) // Handles resolved state
    .catch(function(error) { }) // Handles rejected state
    .finally(function() { }) // Always executes
*/

// ========== METHOD 1: Promise with Variable ==========
const promiseOne = new Promise(function(resolve, reject) {
    // Simulate async task with setTimeout
    setTimeout(function(){
        console.log('Async task 1 is complete');
        resolve(); // Signals successful completion
    }, 1000);
});

// .then() - executes when promise is resolved
// .then() is directly connected with resolve()
promiseOne.then(function(){
    // is function ka main kam hai ki upar se jo bhi values hai vo yaha return hoti hai automatically
    console.log("Promise 1 is consumed");
});

// ========== METHOD 2: Direct Promise Chain ==========
// Creating and consuming promise in one go
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); // Mark as completed
    }, 1000);
}).then(function(){ // Chain .then() directly
    console.log("Async 2 resolved");
});

// ========== METHOD 3: Promise with Data Passing ==========
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve() can accept data to pass to .then()
        resolve({username: "Cafeda", email: "cafeda@gmail.com"});
    }, 1000);
});

// .then() receives the data passed to resolve()
PromiseThree.then(function(user){
    console.log(user); // Logs the user object
});

// ========== METHOD 4: Complete Error Handling ==========
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // Simulate error condition
        if(!error) {
            resolve({username: "kaustav", password: "123"});
        } else{
            reject('ERROR: Something went wrong!'); // Call reject on failure
        }
    }, 2000);
});

promiseFour
    .then((user) => { // First .then() - handles resolved data
        console.log(user);
        return user.username; // Return value goes to next .then()
    })
    .then((username) => { // Second .then() - receives returned value
        console.log(username);  
    })
    .catch(function(error){ // .catch() - handles rejected state
        console.log(error); // Only executes if promise is rejected
    })
    .finally(() => { // .finally() - always executes regardless of outcome
        console.log("Promise completed - success or failure");
    });

// ========== METHOD 5: Async/Await Approach ==========
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"});
        } else{
            reject('ERROR: JS went wrong!');
        }
    }, 2000);
});

// async/await - modern way to handle promises
// async function can use 'await' keyword
async function consumePromiseFive(){
    try{ // try-catch replaces .then() and .catch()
        const response = await promiseFive; // await waits for promise to resolve
        console.log(response);
    } 
    catch(error){ // Handles rejection
        console.log(error);
    }
}

consumePromiseFive();

// ========== REAL WORLD EXAMPLES - FETCH API ==========

// Example 1: Using async/await with fetch
async function getAllUsers(){
    try {
        // fetch() returns a promise
        const response = await fetch('https://api.github.com/users/kaustavxg');
        
        // .json() also returns a promise
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

getAllUsers();

// Example 2: Using .then() chain with fetch
fetch('https://api.github.com/users/kaustavxg')
.then((response) => { // First .then() - handles fetch response
    return response.json(); // Convert to JSON (returns another promise)
})
.then((data) => { // Second .then() - handles JSON data
    console.log(data);
})
.catch((error) => { // .catch() - handles any error in the chain
    console.log('Error:', error);
});

/*
========== KEY CONCEPTS SUMMARY ==========

1. resolve() - marks promise as successful, passes data to .then()
2. reject() - marks promise as failed, passes error to .catch()
3. .then() - handles successful resolution, can be chained
4. .catch() - handles rejection/errors
5. .finally() - always executes, used for cleanup
6. async/await - modern syntax, makes promises look synchronous
7. try/catch - used with async/await for error handling
8. Promise chaining - multiple .then() calls in sequence
9. Data passing - resolve(data) passes data to next .then()

========== Promise vs Async/Await ==========
- Promises: .then().catch().finally()
- Async/Await: try/catch with await keyword
- Both achieve the same result, async/await is more readable
*/