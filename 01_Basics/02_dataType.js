"use strict" // treat all js code as newer version

// alert(3+3); 


let name = "hitesh"


console.log(typeof undefined); // special type -> undefined 
console.log(typeof null); // object
/*  In the earlier version of JavaScript, values are stored in 32 bits, 
    where the first 3 bits indicate the data type and the rest represents the value. 
    For an object, the first three bits are 000. 
    Null in JavaScript means nothing or void so it gets represented as all 0. Hence, the weird bug.
*/

