function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 500, 600));

// rest operator -> ...
// sara saman ko bundle mein bandho or mujhe dedo


// ------------------------------------


const user = {
    username: "kaustav",
    price: 299 
}

// how to pass an obj in function

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 
//handleObject(user);

handleObject({
    username: "kausti",
    price: 999
})


// --------------------------------
// Constructing an ARRAY
const myNewArray = [200, 300, 600, 700, 900];

// make a function which accepts the array and print its second value

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));


// make a function which accepts an object and prints all the values

const username = {
    personName: "Mohini",
    age: 20,
    address: "Vijay Nagar",
    bestFriend: "kaustav",
    collegeLife: "Best" 
}

function About(objectOfAbout) {
    console.log(`My name is ${objectOfAbout.personName}, my age is ${objectOfAbout.age}, my bestfriend name is ${objectOfAbout.bestFriend} and my college life is ${objectOfAbout.collegeLife}`)
}

About(username);