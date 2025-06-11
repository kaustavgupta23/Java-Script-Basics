// =============================================
//               FOREACH LOOP
// =============================================

// What is forEach?
// forEach is a method that executes a provided function once for each array element.
// It's specifically designed for arrays and is more readable than traditional for loops.

const coding = ["js", "ruby", "java", "python"];

// =============================================
//          BASIC FOREACH SYNTAX
// =============================================

// Method 1: Using anonymous function (callback function)
// This is a callback function - callback functions do not have function names
coding.forEach(function (val) {
    console.log(val);  
});

console.log("====================================");

// =============================================
//        FOREACH WITH ARROW FUNCTION
// =============================================

// Method 2: Using arrow function (more modern syntax)
coding.forEach((item) => {
    console.log(item);
});

console.log("====================================");

// =============================================
//      FOREACH WITH SEPARATE FUNCTION
// =============================================

// Method 3: Using separate named function
function printMe(item) {
    console.log(item);
}

// Pass the function reference (without parentheses)
coding.forEach(printMe);

console.log("====================================");

// =============================================
//    FOREACH WITH MULTIPLE PARAMETERS
// =============================================

// forEach provides three parameters: item, index, and full array
coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`); 
});

console.log("====================================");

// =============================================
//      FOREACH WITH ARRAY OF OBJECTS
// =============================================

// Working with complex data structures
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
];

// Accessing object properties within forEach
myCoding.forEach((item) => {
    console.log(`${item.languageName} : ${item.languageFileName}`);
});

console.log("====================================");

// Key Points:
// 1. forEach is specifically for arrays
// 2. It doesn't return a new array (unlike map)
// 3. You cannot break out of forEach loop
// 4. Perfect for when you want to perform an action on each element