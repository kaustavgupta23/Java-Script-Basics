// ==========================================================
//                FOR...IN LOOP -> used for iterating OBJECTS
// ==========================================================

// Object example with programming languages
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    jsx: 'React',
    swift: 'Swift by apple'
};

// ==========================================
//              FOR IN SYNTAX 
// ==========================================
/* 
Syntax:
for (const key in object) {
    // Access key and value
    // object[key] gives you the value
}

What it does:
The for...in loop iterates over all enumerable properties (keys) of an object.
It's perfect for objects where you want to access both keys and values.
*/

// ==========================================
//         FOR...IN WITH OBJECTS
// ==========================================

// Iterate through object properties
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

console.log("====================================");

// ==========================================
//         FOR...IN WITH ARRAYS
// ==========================================

// Array of programming languages
const programming = ["js", "rb", "py", "java", "cpp"];

// Note: for...in with arrays gives you the INDEX (not the value directly)
console.log("Using for...in with arrays (returns indices):");
for (const key in programming) {
    console.log(`Index: ${key}, Value: ${programming[key]}`);
}

console.log("====================================");

// ==========================================
//           COMPARISON SUMMARY
// ==========================================

console.log("=== COMPARISON: for...in vs for...of ===");

console.log("for...in with array (gives indices):");
for (const index in programming) {
    console.log(`${index}: ${programming[index]}`);
}

console.log("for...of with array (gives values directly):");
for (const value of programming) {
    console.log(value);
}

console.log("====================================");

// Key takeaways:
// - for...in → best for OBJECTS (gives you keys)
// - for...of → best for ARRAYS (gives you values)
// - for...in with arrays gives indices, not values directly