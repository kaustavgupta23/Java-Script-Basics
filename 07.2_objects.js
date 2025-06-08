// ========================================
// ADVANCED OBJECT CONCEPTS
// ========================================

// ========================================
// SINGLETON VS NON-SINGLETON OBJECTS
// ========================================
// const tinderUser = new Object() // singleton

// non singleton
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "ravi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

// ========================================
// NESTED OBJECTS
// ========================================
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "gupta"
        }
    }
}

// ========================================
// ACCESSING NESTED OBJECT PROPERTIES
// ========================================
// console.log(regularUser);
// console.log("-----------------------------------------------------------------------------------------");
// console.log(regularUser.email);
// console.log("-----------------------------------------------------------------------------------------");
// console.log(regularUser.fullName);
// console.log("-----------------------------------------------------------------------------------------");
// console.log(regularUser.fullName.userfullname);
// console.log("-----------------------------------------------------------------------------------------");
// console.log(regularUser.fullName.userfullname.firstname);

// console.log("------------------------------------------------------------------------")

// ========================================
// OBJECT MERGING TECHNIQUES
// ========================================
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {4: "a", 5: "b"};

// Wrong way - creates nested objects
// const obj3 = {obj1, obj2};

// Method 1: Object.assign()
// const obj3 = Object.assign({}, obj1, obj2);

/*
The Object.assign() method takes properties from one or more objects and copies them into another object. It combines all the properties into a single object and returns that object.

Example:
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const result = Object.assign({}, obj1, obj2);
// result is { a: 1, b: 2 }

-> The first argument ({}) is the target object (where properties will be copied to).
-> The next arguments (obj1, obj2) are the source objects (where properties are copied from).
-> All properties from obj1 and obj2 are copied into the target object.
*/

// Method 2: Spread Operator (Preferred)
const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

// ========================================
// ARRAY OF OBJECTS
// ========================================
const users = [
    {
        id: 1,
        email: "kg@gmail.com"
    },
    {
        id: 2,
        email: "ag@gmail.com"   
    },
    {
        id: 3,
        email: "mmg@gmail.com"   
    }
]

// Accessing array of objects
users[1].email;

// ========================================
// OBJECT METHODS AND PROPERTY CHECKING
// ========================================
//console.log(tinderUser);

// Get all keys of an object
//console.log(Object.keys(tinderUser));

// Get all values of an object
//console.log(Object.values(tinderUser));

// Get key-value pairs as arrays
//console.log(Object.entries(tinderUser));

// Check if property exists
// kya mere tinder user ke andar isLoggedIn jaisi key hai ya nai
// hai toh -> true else false
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// ===================================================

const course = {
    courseName: "js in hindi",
    price: "999",
    courseTeacher: "gupta ji"
}

// course.courseTeacher;

const {courseTeacher} = course
const {courseTeacher: sir} = course

console.log(courseTeacher);

// apna kam kisi or ke sar pe dal dena -> API 
// {
//     "name": "kaustav";
//     "college": "SGTB Khalsa College";
//     "gradYear": "2025"
// }

[
    {},
    {},
    {}
]