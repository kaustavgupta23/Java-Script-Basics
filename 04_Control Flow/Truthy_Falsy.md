# Truthy and Falsy Values in JavaScript

---

## 🚫 FALSY VALUES IN JAVASCRIPT

These are values that JavaScript considers "false" in boolean context.  
_Matlab jab if condition mein check karte hai, ye sab false return karte hai:_

1. **FALSE**  
   `false` &nbsp; // Direct boolean false value

2. **ZERO (0)**  
   `0` &nbsp; // Regular zero - "kuch nahi hai" means false

3. **NEGATIVE ZERO (-0)**  
   `-0` &nbsp; // Mathematical negative zero - still zero, still false  
   // Normal zero aur negative zero same hi hai practically

4. **BigInt ZERO (0n)**  
   `0n` &nbsp; // BigInt version of zero - for very large numbers  
   // Regular 0 se alag type hai but still false

5. **EMPTY STRING ("")**  
   `""` &nbsp; // Empty string - "kuch likha hi nahi hai"  
   `''` &nbsp; // Single quotes mein bhi same  
   ```` `` ```` &nbsp; // Template literals mein bhi same

6. **NULL**  
   `null` &nbsp; // Deliberately set to "nothing" - "jaanbujh kar khaali rakha hai"  
   // Programmer ne khud set kiya hai ki yahan kuch nahi hai

7. **UNDEFINED**  
   `undefined` &nbsp; // Variable declare kiya but value assign nahi kiya  
   // Ya phir koi property exist hi nahi karti

8. **NaN**  
   `NaN` &nbsp; // Invalid mathematical operation ka result  
   // Jaise: `"hello" / 5 = NaN`  
   // Weird fact: `NaN === NaN` is false! 😵

---

## ✅ TRUTHY VALUES IN JAVASCRIPT

Simple rule: **"Jo bhi falsy nahi hai, wo truthy hai!"**  
_Matlab 8 falsy values ke alawa EVERYTHING is truthy_

### 🎯 COMMON TRUTHY VALUES (that confuse beginners)

1. **STRING ZERO**  
   `"0"` &nbsp; // String ke andar 0 - looks false but is TRUE  
   // Kyunki string empty nahi hai, ek character hai

2. **STRING FALSE**  
   `'false'` &nbsp; // String ke andar "false" word - but still TRUE  
   // Confusion: false (boolean) vs "false" (string)

3. **SPACE IN STRING**  
   `" "` &nbsp; // Space dedi hai string ke andar - TRUE  
   // Even ek space bhi content hai, empty nahi!

4. **EMPTY ARRAY**  
   `[]` &nbsp; // Empty array - still TRUE  
   // Arrays are objects, objects are always truthy

5. **EMPTY OBJECT**  
   `{}` &nbsp; // Empty object - still TRUE  
   // Object hai toh truthy hai, content se fark nahi padta

6. **EMPTY FUNCTION**  
   `function(){}` &nbsp; // Empty function - still TRUE  
   // Function declare hai, content empty but function exist karta hai

---

### 💡 MORE TRUTHY EXAMPLES

- Numbers (except 0, -0, 0n)
  - `1` &nbsp; // TRUE
  - `-1` &nbsp; // TRUE (negative numbers are truthy!)
  - `0.1` &nbsp; // TRUE
  - `Infinity` &nbsp; // TRUE
  - `-Infinity` &nbsp; // TRUE

---
