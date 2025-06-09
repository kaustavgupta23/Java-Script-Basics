var c = 300; // global scope which is available outside the loop

let a = 100;

if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:", a);
} // block scope


console.log("OUTER:",a); 
// console.log(b);
console.log(c);

for(let i = 0; i < array.length; i++) {
    const element = array[i];
}

 