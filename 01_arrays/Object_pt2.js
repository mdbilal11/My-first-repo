const tinderUser = new Object () // Singleton Object 

// const JazzCashUser = {} // Non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Rammy"
tinderUser.IsLoggedIn = false

// console.log(tinderUser);

const newApp = {
    email: "someone@gmail.com",
    fullname: {
        username:{
            firstname: "Muhammad",
            lastname: "Bilal"
        }
    }
}

// console.log(newApp.fullname.username.lastname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}  // Spread property, 90% used this syntax. 

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "B@gmail.com"

    },
    {
        id: 1,
        email: "B@gmail.com"

    },
    {
        id: 1,
        email: "B@gmail.com"

    },
]

users [1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));  // This is very important and interesting.
console.log(Object.values(tinderUser));  
console.log(Object.entries(tinderUser));  // Har key and value ko ARRAY ma bana deta hai, Very less useable syntax. 
 

// Value ko check or pochnky ka tareeka

console.log(tinderUser.hasOwnProperty('name'));
