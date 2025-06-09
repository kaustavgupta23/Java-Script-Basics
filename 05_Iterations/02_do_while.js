// =============================================
//                 WHILE LOOP
// =============================================

// Basic while loop - incrementing by 2
let index = 0;
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

console.log("====================================");

// =============================================
//         WHILE LOOP WITH ARRAY
// =============================================

// Array of superheroes
let myArray = ['flash', 'batman', 'superman'];

// While loop to iterate through array
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr++;
}

console.log("====================================");

// =============================================
//         FOR LOOP COMPARISON
// =============================================

// Same array iteration using for loop for comparison
for (let arr = 0; arr < myArray.length; arr++) {
    console.log(`Value is ${myArray[arr]}`);
}

console.log("====================================");

// =============================================
//               DO WHILE LOOP
// =============================================

// Basic do-while loop - executes at least once
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

console.log("====================================");

// =============================================
//            DO WHILE SPECIAL CASE
// =============================================

// Special case - condition is false from start, but still executes once
let score1 = 11;
do {
    console.log(`Score is ${score1}`);
    score1++;
} while (score1 <= 10);

console.log("====================================");

// do while -> kam pehle hoga fir condition check hogi
// means -> pehle kam krdo mera fir mein paise dunga

