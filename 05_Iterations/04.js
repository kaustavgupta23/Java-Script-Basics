const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    jsx: 'React',
    swift: 'Swift by apple'
}

// ==========================================
//              FOR IN
// ==========================================
/* 
for (const key in object) {

}
*/

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}