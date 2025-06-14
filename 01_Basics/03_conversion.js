// ===================== Type Conversion & Operations in JavaScript =====================

// Example 1: Number Conversion
let score = false;

// typeof operator se variable ka type check kar sakte hain
// console.log(typeof score);           // boolean
// console.log(typeof (score));         // boolean

// Boolean ko Number me convert karte hain
let valueInNumber = Number(score);
// console.log(typeof valueInNumber);   // number
// console.log(valueInNumber);          // 0

// Conversion Examples:
// "33"      -> 33
// "33abc"   -> NaN (not a number)
// true      -> 1
// false     -> 0

// Example 2: Boolean Conversion
let isLoggedIN = 0;
let booleanisLoggenIn = Boolean(isLoggedIN);
// console.log(booleanisLoggenIn);      // false

/* ========= Question ==========
Q. If I write isLoggedIn = -10, it still gives true. Why do negative numbers also return true when converted to BOOLEAN in JavaScript?

=========== ANSWER ===========:
In JavaScript, any non-zero number (positive or negative) is considered "truthy" when converted to a boolean.
So, Boolean(-10) gives true because -10 is not 0, null, undefined, NaN, "", or false.

Summary:
Boolean(0)    -> false
Boolean(-10)  -> true
Boolean(10)   -> true

Yani, sirf 0 pe false milta hai, baaki saare numbers (chahe negative ho ya positive) pe true milta hai.
*/

// Example 3: String Conversion
let someNumber = 33;
// console.log(someNumber);             // 33

let stringNumber = String(someNumber);
// console.log(typeof stringNumber);    // string

// ===================== Operations =====================

// Negation Example
let value = 3;
let negValue = -value;
// console.log(negValue);               // -3

// Exponentiation Example
// console.log(2 ** 10);                // 1024

// String Concatenation Examples
let str1 = "hello ";
let str2 = "gupta ji";

let str3 = str1 + str2;
// console.log(str3);                   // "hello gupta ji"

// Type Coercion in Addition
/*

console.log("1" + 2);      // "12"  (string + number => string)
console.log(1 + "2");      // "12"  (number + string => string)

console.log("1" + 2 + 2);  // "122" (left to right: "1"+2="12", "12"+2="122")
console.log(1 + 2 + "2");  // "32"  (1+2=3, 3+"2"="32")

*/

// Explanation:
// Jab bhi string aur number ko + se jodte hain, agar pehle string aa gayi toh baad wale sab string ban jaate hain.
// JS ka rule hai, pehle number add ho gaye toh fir string se concatenate ho jayega.

// kaise?? rule bhai rule -> JS ka rule hai ye, kuch nahi kar sakte!


console.log(+true); // bhot hi galat tarika hai aisa code likhna // very non readable code

console.log(+""); // non sense code
 

let num1, num2, num3

num1 = num2 = num3 = 2+2;
console.log(num1);


let gameCounter = 100;

//prefix
++gameCounter;

//postfix
gameCounter++;

console.log(gameCounter);

