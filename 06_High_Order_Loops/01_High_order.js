// =============================================
//                FOR...OF LOOP
// =============================================

// Arrays and Objects examples:
// ["", "", ""]
// [{}, {}, {}]

// ================= SYNTAX =====================
// for (const iterator of object) {
//      do something with item
// }


// What it does:
// The for...of loop lets you easily go through each value in something that can be iterated over 
// (like arrays, strings, maps, sets, etc.). It automatically handles getting each item one by one.

// =============================================
//           FOR...OF WITH ARRAYS
// =============================================

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

/* Expected output: 1
                    2
                    3
                    4
                    5  
*/

console.log("====================================");

// example 2

const IPL = ["RCB", "MI", "CSK", "KKR", "SRH"];

for (const element of IPL) {
    console.log(element);
    
}

console.log("====================================");

// =============================================
//          FOR...OF WITH STRINGS
// =============================================

const greetings = "Hello world!";

for (const print of greetings) {
    console.log(`Each char is ${print}`);
}

/* Expected Output: H
                    e
                    l
                    l
                    o
                    (space)
                    w
                    o
                    r
                    l
                    d
                    !
*/

// aisa isliye print ho rha hai because ye har letter ke upar iterate krta hai

console.log("====================================");

// =============================================
//                 MAPS
// =============================================

// A Map in JavaScript is like a super-powered dictionary or phonebook. 
// It stores pairs of information - a key and its corresponding value - and remembers the order you put them in.

// NO DUPLICATE KEYS ALLOWED

// ********  Map is not ITERABLE ***********

// --------------------------------------
// What is a Map?
// --------------------------------------

// Think of it like a collection of labeled boxes. Each box has a label (the key) 
// and something inside it (the value). You can use the label to quickly find what's in that specific box.

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('UAE', "United Arab Emirates");

console.log(map);

// Iterating through Map using *** forof ***

// breaking key and value here with square bracket [], yaha array ka destructure ho jaata hai
for (const [key, value] of map) {
    console.log(key, '-> ', value);  
}

console.log("====================================");

// =============================================
//        FOR...OF WITH OBJECTS (ERROR CASE)
// =============================================

const myObject = {
    'game1' : 'BGMI',
    'game2' : 'Cricket 07'
};

// This will throw an error because regular objects are not iterable with for...of
// Uncomment the lines below to see the error:

/*
for (const [key, value] of myObject) {
    console.log(key, '-> ', value);  
}
*/

console.log("Regular objects are not iterable with for...of loop");
console.log("Use for...in loop for objects or Object.entries() method");

// Alternative ways to iterate over objects:
console.log("Alternative - using Object.entries():");
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, '-> ', value);  
}

