// const tinderUser = new Object()

// non singleton
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "ravi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "gupta"
        }
    }
}

console.log(regularUser);
console.log("-----------------------------------------------------------------------------------------");
console.log(regularUser.email);
console.log("-----------------------------------------------------------------------------------------");
console.log(regularUser.fullName);
console.log("-----------------------------------------------------------------------------------------");
console.log(regularUser.fullName.userfullname);
console.log("-----------------------------------------------------------------------------------------");
console.log(regularUser.fullName.userfullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    }
]


console.log(user[2].email);



