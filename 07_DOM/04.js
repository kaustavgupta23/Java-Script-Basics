// ========== DOM MANIPULATION METHODS ==========

// ========== ADDING ELEMENTS TO DOM ==========

// Method 1: Using innerHTML (Less secure - can execute scripts)

function addLanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`; 
    document.querySelector('.language').appendChild(li);
}

// Method 2: Using createTextNode (More secure - treats as plain text)
function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName)); // Safe from XSS
    document.querySelector('.language').appendChild(li);
}

// Method 3: Using textContent (Alternative secure method)
function addSafeLanguage(langName){
    const li = document.createElement('li');
    li.textContent = langName; // Also safe from XSS
    document.querySelector('.language').appendChild(li);
}



console.log("Initial state: Adding languages...");
addLanguage("python");
addLanguage("ruby"); 
addLanguage("C++");
addLanguage("Typescript");
addOptiLanguage("golang -> optimised method");

console.log("Languages added successfully!");

// ========== EDITING ELEMENTS ==========

// Method 1: Using replaceWith() - Replaces entire element
console.log("Editing: Replacing second language...");
let secondLanguage = document.querySelector("li:nth-child(2)"); // Gets 2nd li element
console.log("Second language before edit:", secondLanguage);

const newli = document.querySelector('li'); // Gets first li element
newli.textContent = "Mojo"; // Changes text content
secondLanguage.replaceWith(newli); // Replaces second li with modified first li

// Method 2: Using outerHTML - Replaces element with HTML string
console.log("Editing: Replacing first language using outerHTML...");
const firstLanguage = document.querySelector("li:first-child"); // Gets 1st li element
firstLanguage.outerHTML = '<li>Typescript</li>'; // Replaces entire element with new HTML

// ========== REMOVING ELEMENTS ==========

// Method: Using remove() - Removes element from DOM
console.log("Removing: Deleting last language...");
const lastLang = document.querySelector("li:last-child"); // Gets last li element
console.log("Last language to be removed:", lastLang);
lastLang.remove(); // Removes element completely from DOM

console.log("Operation completed successfully!");

// ========== IMPORTANT CSS SELECTORS REFERENCE ==========
/*
li:first-child     - First li element
li:last-child      - Last li element  
li:nth-child(2)    - 2nd li element (1-indexed)
li:nth-child(odd)  - All odd positioned li elements
li:nth-child(even) - All even positioned li elements
.language          - Element with class "language"
#language          - Element with id "language"
*/

// ========== ALTERNATIVE METHODS ==========
/*
1. innerHTML vs textContent vs createTextNode:
   - innerHTML: Can execute scripts (XSS risk) but supports HTML
   - textContent: Safe, treats as plain text
   - createTextNode: Safest, creates text node explicitly

2. Element Selection:
   - querySelector(): Returns first matching element
   - querySelectorAll(): Returns all matching elements (NodeList)
   - getElementById(): Faster for ID selection
   - getElementsByClassName(): Returns live HTMLCollection

3. Element Removal:
   - remove(): Modern method, removes element directly
   - removeChild(): Older method, needs parent element
   - parentNode.removeChild(element): Alternative syntax

4. Element Modification:
   - textContent: Changes text only
   - innerHTML: Changes HTML content
   - outerHTML: Replaces entire element
   - replaceWith(): Replaces element with new element(s)
*/