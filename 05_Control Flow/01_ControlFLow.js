// ========================================
// CONDITIONAL STATEMENTS (IF-ELSE)
// ========================================

// ========================================
// BASIC IF STATEMENT STRUCTURE
// ========================================
// if 

/*
if(true){
    
}
*/

// ========================================
// IF-ELSE EXAMPLE
// ========================================
const temp = 41
if(temp === 40){
   // console.log("less than 50")
}
else{
   // console.log(" temp is > 50 ");
}

// if condition is false -> code will not go inside loop
/*
if(false){
    
}
*/

// ========================================
// COMPARISON OPERATORS
// ========================================
// =, <, >, <=, >=, ==, !=, ===

// = -> single equals to is for assignment
// Example: let name = "Kaustav" (assigning value)

// == -> kya vo barabar hai us chiz ke? (loose equality)
// Example: 5 == "5" returns true (converts string to number)

// === -> strict equality (type + value check)
// Example: 5 === "5" returns false (different types: number vs string)

// ========================================
// SCOPE IN CONDITIONAL STATEMENTS
// ========================================
const score = 200

if(score > 100){
    let power = "fly"
   // console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`);
// var scope is always global -> jo nahi hona chaiye
// in above example: power scope ke bahar access ho rha hai bcz of var

// let and var mein scope ka problem nai aata

// ========================================
// IMPLICIT SCOPE (SINGLE LINE IF)
// ========================================
//const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");
// implicit scope // can write multiple lines // single line // not a readable code



// ==========================================
// NESTING -> when need to check multiple conditions
// ==========================================

const balance = 1000;

if (balance < 500) {
    //console.log("less than");
} else if(balance < 750) {
    //console.log("less than 750");
} else if (balance < 900) {
    //console.log("less than 900");
} else{
    //console.log("less than 1200");
}

// ===========================================
// How they are used in Real Life?
// ===========================================

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {  // && checks both conditions are true or not
    // ek bhi statement false hogya then log nahi hoga
    //console.log("Allow to do shopping"); 
}
if (loggedInFromGoogle || loggedInFromEmail) { // checks "" OR "" condition 
    //console.log("User logged in");   
}




// =============================================
// SWITCH
// =============================================
/*

================   SYNTAX   ===============

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/


const month = "April";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "march":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("No match");

        break;
}

// ========================================
// IMPORTANT CONCEPT: BREAK STATEMENT
// ========================================
// if break pe comments lag jaye, or value match hogyi key se, toh uske baad ka saara code ye execute krta hai

// Example without break (Fall-through behavior):

console.log("===================================");

const testMonth = 2;

switch (testMonth) {
    case 1:
        console.log("January");
        // No break here!
    case 2:
        console.log("Feb");
        // No break here!
    case 3:
        console.log("March");
        break;
    default:
        console.log("No match");
}

/*
// Output will be:
// "Feb"
// "March"

// Because after matching case 2, it continues executing next cases until it finds a break
*/

// ========================================
// SWITCH VS IF-ELSE
// ========================================
// Switch is better when:
// - Multiple exact value comparisons
// - Cleaner code for many conditions
// - Better performance for many cases

// If-else is better when:
// - Range comparisons (>, <, >=, <=)
// - Complex conditions
// - Boolean expressions



