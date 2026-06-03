
function sayMyName() {
    console.log("B")
    console.log("i")
    console.log("l")
    console.log("a")
    console.log("l")
}

// sayMyName()

 function addTwoNumbers (number1, number2) // in brackets ky ander values ko parameters khety hain  
 {
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

// addTwoNumbers(3, "4") // in bracket ky ander values ko arguments khety hain. 

const result = addTwoNumbers(3, 5) 
// console.log("Result: ",result)

function LoginUserMessage (username){
    if(!username){
        console.log("Please enter a username.")
        return
    }
    return `${username} just logged in.`
}

// console.log(LoginUserMessage ("Bilal"));
// console.log(LoginUserMessage ());

// Video Lecture No. 20 Start here

function calculateCartPrice (val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Bilal",
    price: 199
}

// function handleObject(anyobject){
//     // console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`)
// }

// handleObject(user)

const student = {
    name: "Ayesha",
    marks: [80, 85, 90]

};

