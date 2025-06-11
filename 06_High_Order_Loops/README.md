# High Order Loops & Array Methods in JavaScript

This folder contains beginner-friendly and commented examples demonstrating **high-order loops** and **array/object iteration methods** in JavaScript

---

## 📁 Files & What They Cover

### ✅ `01_High_order.js`
- **for...of loop**
- Used for arrays, strings, and maps
- Not usable directly with objects
- Examples:
  - Iterating arrays and strings
  - Iterating `Map` using destructuring
  - How to handle objects with `Object.entries()`

---

### ✅ `02_highorder.js`
- **for...in loop**
- Best for objects
- Also works with arrays (returns indices)
- Comparison between `for...in` and `for...of`

---

### ✅ `03_high_order.js`
- **forEach loop**
- Only for arrays
- Three styles:
  - Anonymous function
  - Arrow function
  - Named function
- Access to value, index, and full array
- Use with array of objects

---

### ✅ `04_high_order.js`
- **filter() method**
- Creates new array based on condition(s)
- Original array is not modified
- Examples:
  - Filtering numbers
  - Filtering array of book objects
  - Using multiple filter conditions

---

### ✅ `05_high_order.js`
- **map() method**
- Transforms array items into a new array
- Best for data transformation
- Examples:
  - Add 10 to all values
  - Method chaining with map → map → filter

---

## 🧠 Key Concepts Recap

- `for...of` → Arrays, Strings, Maps (gives **values**)
- `for...in` → Objects, Arrays (gives **keys** or **indices**)
- `forEach` → Arrays only, for performing operations
- `filter()` → Returns new array with elements passing condition
- `map()` → Returns transformed array of same length

---
