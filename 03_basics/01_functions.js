
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
console.log(LoginUserMessage ());