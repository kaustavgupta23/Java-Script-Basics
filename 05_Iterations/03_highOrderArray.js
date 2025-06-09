// =============================================
//                FOR...OF LOOP
// =============================================

// Arrays and Objects examples:
// ["", "", ""]
// [{}, {}, {}]

// ================= SYNTAX =====================
// for (const element of object) {
//      do something with item
// }


// What it does:
// The for...of loop lets you easily go through each value in something that can be iterated over 
// (like arrays, strings, maps, sets, etc.). It automatically handles getting each item one by one.

// =============================================
//           FOR...OF WITH ARRAYS
// =============================================

const arr = [1, 2, 3, 4, 5];

/* Expected output: 1
                    2
                    3
                    4
                    5  
*/

for (const num of arr) {
    console.log(num);
}

console.log("====================================");

// =============================================
//          FOR...OF WITH STRINGS
// =============================================

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
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

console.log("====================================");

// =============================================
//                 MAPS
// =============================================

// A Map in JavaScript is like a super-powered dictionary or phonebook. 
// It stores pairs of information - a key and its corresponding value - and remembers the order you put them in.

// NO DUPLICATE KEYS ALLOWED

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

// Iterating through Map using for...of
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