// =============================================
//              FILTER METHOD
// =============================================

// What is filter?
// The filter() method creates a new array with all elements that pass a certain condition.
// It doesn't modify the original array, instead returns a new filtered array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// =============================================
//           BASIC FILTER USAGE
// =============================================

// Method 1: Using filter method (recommended)
const newNums = myNums.filter( (num) => {
    return num > 4;
} );

// {} ye use hoga arrow mein toh return use hoga hi hoga
// (Translation: If you use {} in arrow function, then return must be used)

console.log("Filtered numbers > 4:", newNums);
// Output: [5, 6, 7, 8, 9, 10]

console.log("====================================");

// =============================================
//        ALTERNATIVE WITH FOREACH
// =============================================

// Method 2: Manual filtering using forEach (not recommended for filtering)
const newNumsManual = [];

myNums.forEach( (num) => {
    if(num > 4){
        newNumsManual.push(num);
    }
} );

console.log("Manual filtering result:", newNumsManual);

console.log("====================================");

// =============================================
//      FILTER WITH ARRAY OF OBJECTS
// =============================================

// Complex data structure - array of book objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// =============================================
//         SINGLE CONDITION FILTER
// =============================================

// Filter books by single condition - genre is History
let userBooks = books.filter( (bk) => bk.genre === 'History' );
console.log("History books:", userBooks);

console.log("====================================");

// =============================================
//        MULTIPLE CONDITIONS FILTER
// =============================================

// Filter books with multiple conditions - History books published after 1995
userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === 'History');
console.log("History books published after 1995:", userBooks);

console.log("====================================");

// Key Points:
// 1. filter() always returns a new array
// 2. Original array remains unchanged
// 3. Use return statement with {} in arrow functions
// 4. Can combine multiple conditions with && (AND) or || (OR)
// 5. More efficient than manual forEach approach for filtering