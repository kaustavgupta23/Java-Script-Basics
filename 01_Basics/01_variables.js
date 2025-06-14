console.log("gupta ji");

// Variable declarations
const accountId = 144553;        // const -> jisko mein ek baar declare krke firse kabhi declare na kr paau
let accountEmail = 'kaustav@google.com';
let accountPassword = "12345";

// Display initial values
console.table([accountId, accountEmail, accountPassword]);

// Update values (only let variables can be reassigned)
accountEmail = 'momo@cgl.com';
accountPassword = "78912";

// Display updated values
console.table([accountEmail, accountPassword]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/