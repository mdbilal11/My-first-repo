// Singleton

// object literals
Object.create  // This is constractor method.


const JsUser = {}  // Yeh ban gya hai object.

const JsUser1  = {
    name: "Bilal",
    age: 19,
    Location: "FSD",
    Email: "bilal@amazon.com",
    IsLoggedIn: false,
    LastLoginDays: ["Monday", "Tuesday"]

}

// One Method to access the values

// console.log(JsUser1.name);
// console.log(JsUser1.age);
// console.log(JsUser1.Location);
// console.log(JsUser1.LastLoginDays);
// console.log(JsUser1.IsLoggedIn);


// 2nd method to Access Values

// console.log(JsUser1["name"]),


JsUser1.name = "bilal@google.com"
// Object.freeze(JsUser1)
JsUser1.age = 17
console.log(JsUser1);

