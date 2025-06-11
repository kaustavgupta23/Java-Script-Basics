// =============================================
//                 MAP METHOD
// =============================================

// What is map?
// The map() method creates a new array by calling a function on every element of the original array.
// It transforms each element and returns a new array of the same length.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =============================================
//           BASIC MAP USAGE
// =============================================

// map is better than forEach for transformations
// Add 10 to each number
let newNums = myNumbers.map((num) => {
    return num + 10;
});

console.log("Original numbers:", myNumbers);
console.log("After adding 10:", newNums);

console.log("====================================");

// =============================================
//        METHOD CHAINING WITH MAP
// =============================================

// CHAINING -> map ke sath map or map ke sath filter etc
// (Translation: CHAINING -> map with map or map with filter etc)

// Multiple operations in sequence:
// Step 1: Multiply each number by 10
// Step 2: Add 1 to each result
// Step 3: Filter numbers >= 40

newNums = myNumbers
          .map( (num) => num * 10 )     // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
          .map( (num) => num + 1 )      // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
          .filter( (num) => num >= 40 ) // [41, 51, 61, 71, 81, 91, 101]

console.log("After chaining operations:", newNums);

console.log("====================================");