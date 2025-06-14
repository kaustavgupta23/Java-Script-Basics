// ================= POSTFIX =================

let x = 4;
let y = x++;
console.log(`Postfix: x = ${x}, y = ${y}`);

// The postfix form returns the original value first, and then increases it.
/*
x++ returns 5 (original value)
x becomes 6
y gets the original value i.e 5

x++ means:
            • First, assign the current value of x to y ⇒ y = 5
            • Then, increase x by 1 ⇒ x = 6
*/

console.log("=====================================");


// ================= PREFIX =================

let a = 5;
let b = ++a;
console.log(`Prefix: a = ${a}, b = ${b}`);

/*
Use this when you want to increase first, then use the value.

•  x becomes 6
•  ++x returns 6
•  y gets the updated value: 6

++x means:
            • First, increase x by 1 ⇒ x = 6
            • Then, assign the new value of x to y ⇒ y = 6
*/