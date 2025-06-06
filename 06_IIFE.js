// ========================================
// IIFE -> Immediately Invoked Function Expressions
// ========================================

// Basic IIFE with function declaration
(function chai() {
    console.log(`DB CONNECTED`)
})();

// Global scope ke pollution se problem hoti hai kafi baar and usko remove krne ke liye IIFE is used

// IIFE with arrow function and parameter
( (name) => {
    console.log(`DB CONNECTED 2 ${name}`)
} ) ("kaustav"); 

// Important Notes:
// semicolon is important
// you want to write two IIFE's, add semicolon after ending the 1st IIFE