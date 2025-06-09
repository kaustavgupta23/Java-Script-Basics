# ✅ JavaScript: Falsy vs Truthy Values

## 🚫 Falsy Values in JavaScript

```js
// ========================================
// 🚫 FALSY VALUES IN JAVASCRIPT
// ========================================
// Ye wo 8 values hain jo JS mein "false" treat hoti hai

// 1. FALSE - Obviously false hai
false  // Direct boolean false value

// 2. ZERO (0)
0      // Number zero - "kuch nahi hai" means false

// 3. NEGATIVE ZERO (-0)
-0     // Still zero, still false

// 4. BigInt ZERO (0n)
0n     // BigInt ka zero - alag type, par false

// 5. EMPTY STRING ("")
""     // Double quotes - empty string
''     // Single quotes - same
``     // Template literals - bhi khaali = false

// 6. NULL
null   // Deliberately empty - "jaanbujh ke khaali"

– 7. UNDEFINED
undefined  // Variable declare kiya but assign nahi kiya

// 8. NaN
NaN    // Not a number - jaise "hello"/5 → NaN
       // Note: NaN === NaN is false 😵
✅ Truthy Values in JavaScript
js
Copy
Edit
// ============================================
// ✅ TRUTHY VALUES IN JAVASCRIPT
// ============================================
// Rule: "Jo falsy nahi hai, wo truthy hai!"

// 1. STRING ZERO
"0"        // Non-empty string → TRUE

// 2. STRING FALSE
"false"    // String hai, boolean nahi → TRUE

// 3. STRING WITH SPACE
" "        // Ek space bhi content hai → TRUE

// 4. EMPTY ARRAY
[]         // Array is object → always truthy

// 5. EMPTY OBJECT
{}         // Object hai → truthy

// 6. EMPTY FUNCTION
function(){}  // Function exists → truthy