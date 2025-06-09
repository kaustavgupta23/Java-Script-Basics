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

// ==================================== GPT Explanationn ====================================

// Normal Function - yeh define hota hai, lekin call nahi hota
function normalFunction() {
    console.log("Hello");
}
// Yaha function define hua, lekin run nahi hua
normalFunction(); // Ab manually call karna pada

// IIFE - Define hote hi turant run ho gaya
(function() {
    console.log("Hello from IIFE");
})(); // Define + Execute dono ek saath

// STRUCTURE?

(function() {
    // Your code here
})();

// Step by Step
// 1.   () - Pehle brackets mein function wrap karo
// 2.   function() { } - Function define karo
// 3.   () - Last mein brackets lagao execute karne ke liye

// ==========================================================================================
// EXAMPLES

// 1. Simple IIFE
(function() {
    console.log("Main turant run ho gaya!");
})();

// 2. IIFE with parameters
(function(name, age) {
    console.log(`Mera naam ${name} hai aur main ${age} saal ka hun`);
})("Kaustav", 25);

// 3. Arrow function ke saath IIFE
(() => {
    console.log("Arrow function wala IIFE");
})();

// 4. Parameters ke saath arrow IIFE
((city) => {
    console.log(`Main ${city} se hun`);
})("Delhi");