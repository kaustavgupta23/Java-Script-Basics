// JAVASCRIPT OBJECTS
// ========================================

// ========================================
// SINGLETON CONCEPT
// ========================================
// singleton

// ========================================
// OBJECT LITERALS
// ========================================
// object literals -> object ko declare krne ka tarika

// ========================================
// SYMBOL DECLARATION AND USAGE
// ========================================
const mySym = Symbol("key1");
// symbol lena hai -> use define krna hai -> print krna hai

// ========================================
// OBJECT CREATION WITH DIFFERENT DATA TYPES
// ========================================
const jsUser = {
    nameOf: "kaustav",
    age: 21, 
    location: "Delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "myykey1"   // Symbol as object key
}

// ========================================
// ACCESSING OBJECT PROPERTIES
// ========================================
console.log(jsUser.age);

// ========================================
// ACCESSING AND CHECKING THE TYPE OF SYMBOL PROPERTIES
// ========================================
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

// ========================================
// MODIFYING OBJECT PROPERTIES
// ========================================
jsUser.location = "Bangalore"
console.log(jsUser.location);

// ========================================
// OBJECT.FREEZE() - PREVENTING MODIFICATIONS
// ========================================
// Object.freeze(jsUser);
jsUser.nameOf = "ROHAN";
console.log(jsUser.nameOf);

// console.log(jsUser);

// ========================================
// ADDING FUNCTIONS TO OBJECTS
// ========================================
jsUser.greetings = function() {
    console.log("Hello JS user");
}

console.log(jsUser.greetings());