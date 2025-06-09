// ========================================
// 🚫 FALSY VALUES IN JAVASCRIPT
// ========================================
// These are values that JavaScript considers "false" in boolean context
// Matlab jab if condition mein check karte hai, ye sab false return karte hai

// 1. FALSE - Obviously false hai
// false  // Direct boolean false value

// 2. ZERO (0) - Number zero ko false maante hai
// 0      // Regular zero - "kuch nahi hai" means false

// // 3. NEGATIVE ZERO (-0) - Rare case but exists
// -0     // Mathematical negative zero - still zero, still false
//        // Normal zero aur negative zero same hi hai practically

// // 4. BigInt ZERO (0n) - Big integers ka zero
// 0n     // BigInt version of zero - for very large numbers
//        // Regular 0 se alag type hai but still false

// // 5. EMPTY STRING ("") - Khaali string
// ""     // Empty string - "kuch likha hi nahi hai"
// ''     // Single quotes mein bhi same
// ``     // Template literals mein bhi same

// // 6. NULL - Intentionally empty
// null   // Deliberately set to "nothing" - "jaanbujh kar khaali rakha hai"
//        // Programmer ne khud set kiya hai ki yahan kuch nahi hai

// // 7. UNDEFINED - Not defined at all
// undefined  // Variable declare kiya but value assign nahi kiya
//            // Ya phir koi property exist hi nahi karti

// // 8. NaN - Not a Number
// NaN    // Invalid mathematical operation ka result
//        // Jaise: "hello" / 5 = NaN
//        // Weird fact: NaN === NaN is false! 😵


// // ============================================
// // ✅ TRUTHY VALUES IN JAVASCRIPT
// // ============================================
// // Simple rule: "Jo bhi falsy nahi hai, wo truthy hai!"
// // Matlab 8 falsy values ke alawa EVERYTHING is truthy

// // 🎯 COMMON TRUTHY VALUES (that confuse beginners)

// // 1. STRING ZERO - Number nahi, string hai!
// "0"        // String ke andar 0 - looks false but is TRUE
//            // Kyunki string empty nahi hai, ek character hai

// // 2. STRING FALSE - Boolean nahi, string hai!
// 'false'    // String ke andar "false" word - but still TRUE
//            // Confusion: false (boolean) vs "false" (string)

// // 3. SPACE IN STRING - Empty lagta hai but nahi hai!
// " "        // Space dedi hai string ke andar - TRUE
//            // Even ek space bhi content hai, empty nahi!

// // 4. EMPTY ARRAY - Khaali lagta hai but object hai!
// // []         // Empty array - still TRUE
//            // Arrays are objects, objects are always truthy

// // 5. EMPTY OBJECT - Khaali object but still object!
// {}         // Empty object - still TRUE  
//            // Object hai toh truthy hai, content se fark nahi padta

// // 6. EMPTY FUNCTION - Function exist karta hai!
// // function(){}  // Empty function - still TRUE
//               // Function declare hai, content empty but function exist karta hai

// // ============================================
// // 💡 MORE TRUTHY EXAMPLES
// // ============================================

// // Numbers (except 0, -0, 0n)
// 1          // TRUE
// -1         // TRUE (negative numbers are truthy!)
// 0.1        // TRUE
// Infinity   // TRUE
// -Infinity  // TRUE

// ========================================

const userEmail = [];

if (userEmail) {
    // console.log("Got user email");
} else {
    // console.log("Dont have user email");
}

if(userEmail.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// ==========================================
// Nullish Coalescing Operator (??): null defined
// means -> null value aayi hai toh safety check karlo
// ===========================================

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 30

val1 = null ?? 10 ?? 20

console.log(val1);
//output: 10
 

// ==========================================
// Terniary Operator
// ===========================================

// condition ? true : false;

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

