// =============================================
//                   FOR LOOP
// =============================================

// Basic for loop - iterating from 1 to 10
for (let index = 1; index <= 10; index++) {
    const element = index;
    
    // Check if current number is 5
    if (element == 5) {
        console.log("5 is the best number");
    }
    
    // Print current element
    console.log(element);
}

// =============================================
//               NESTED FOR LOOPS
// =============================================

// Nested for loops - creating multiplication table
for (let i = 1; i <= 10; i++) {
    console.log(`Outer Loop value: ${i}`);
    console.log("====================================");
    
    // Inner loop for multiplication
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and outer loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
    console.log("====================================");
}

// =============================================
//               ARRAY ITERATION
// =============================================

// Array iteration - hinglish words
let myArray = ["hathi", "ghoda", "pal", "ki", "jai", "kanhaiya", "lal", "ki"];

// Print array length
console.log(myArray.length);

// Loop through array elements
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// =============================================
//            BREAK AND CONTINUE
// =============================================

// Example with continue - skip number 5 but continue loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skip rest of loop body and go to next iteration
    }
    console.log(`Value of i is ${index}`);    
}

console.log("=== Example with break ===");

// Example with break - stop loop when reaching 5
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5 - Breaking loop`);
        break; // Exit the loop completely
    }
    console.log(`Value of i is ${index}`);    
}

