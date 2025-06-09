// ========================================
// UNDERSTANDING 'this' KEYWORD IN JAVASCRIPT
// ========================================

// Example 1: 'this' in object methods
const user = {
    username: "kaustav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this); // Shows the user object
    }
}

// Uncomment to test:
// user.welcomeMessage()
// user.username = "sam"; // yaha context change krdia -> values change krdi bs 
// user.welcomeMessage()

// ========================================
// 'this' IN GLOBAL CONTEXT
// ========================================

console.log(this);
// output -> {} i.e empty -> there is no context available in global

// Note:
// this -> current context
// loop ek andar ke kisi bhi chiz ko access krne ke liye -> use this  
// global object in browser -> window

console.log("----------------------------------------------------------------------");

// ========================================
// 'this' INSIDE DIFFERENT TYPES OF FUNCTIONS
// ========================================

// 1. Normal function declaration
function chai() {
    console.log(this);
}
chai()
// output -> global object of the function

console.log("----------------------------------------------------------------------");

// 2. Function expression
const chai2 = function () {
    let username = "kaustav"
    console.log(this);
}
chai2()

console.log("----------------------------------------------------------------------");

// 3. Arrow function
const chai3 = () => {
    let username = "kaustav"
    console.log(this); 
}
chai3(); // Fixed: was calling chai2() instead of chai3()

console.log("----------------------------------------------------------------------");

// ========================================
// WHAT IS AN ARROW FUNCTION?
// ========================================

// () => {} // this is an ARROW FUNCTION

// ========================================
// ARROW FUNCTION SYNTAX VARIATIONS
// ========================================

// EXPLICIT RETURN -> using {}
const addTwo = (num1, num2) => {
    return num1 + num2;
} 
// {} -> use kia toh return use hoga hi hoga

console.log(addTwo(5, 6));

// ----------------------------------

// IMPLICIT RETURN -> {} use nahi krne padte
const addThree = (num1, num2, num3) => (num1 + num2 + num3);

// () -> direct use krne mein 

console.log(addThree(3, 4, 5));

console.log("----------------------------------------------------------------------");

// ========================================
// 'this' IN ARRAY METHODS WITH ARROW FUNCTIONS
// ========================================

const myArray = [2, 4, 5, 7, 9];

myArray.forEach(() => {
    console.log(this);
})