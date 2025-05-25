// function sayMyName(){ //sayMyName -> function name
//     console.log("Kaustav");
//     console.log("Gupta");
//     console.log("is");
// }

// sayMyName() // this is function reference
// jaise is parenthesis() lagaya -> ye hogya uska execution/reference











// adding two numbers

// ------------- APPROACH 1 --------------------//

// function addTwo(number1, number2) { // function ki definition mein jo input lete hai -> paramenters 

//     console.log(number1 + number2);
// }

// const result = addTwo(4, 6);
// console.log("Result: ", result);

// function ko jab call krvate hai and jo value () isme dalte hai vo -> arguments


// --------------- APPROACH 2 -----------------//

function addTwoNumber(number1, number2){
    return number1+number2;
   // console.log() // code is unreachable -> return ke baade code kuch bhi execute nai krta
}

const result = addTwoNumber(3, 5);
console.log("Result: ", result);
 


 // loginusername


 function loginUserMessage(username = "sam") { // sam is a default value here
       if(username === undefined) {
        console.log("Please enter your username");
        return
    }

    return `$(username) just logged in`
 }

 console.log(loginUserMessage()) // but if you pass any value here, it will over write the default value
 scfmnncfn