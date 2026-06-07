const user = {
    username: "Bilal",
    price: 999,

    WelcomeMessage: function() {
        console.log(`${this.username} , Welcome to website.`);
        // console.log(this);

    }

}
// user.WelcomeMessage()
// user.username = "sami"
// user.WelcomeMessage()

// console.log(this);


function ice() {
    console.log(this);
}

// ice()

// This is arrow function 

// () => {}

// const addTwo = (num1, num2) => {                agr yeh curly braces use karey tu "return" likhna hii parey ga.
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => num1 + num2      Yaha return likhny ki zarorat nhii hai.
// const addTwo = (num1, num2) => (num1 + num2)    Agr yeh parenthesis use karni hai tu tab bi "return" nhi likhna
const addTwo = (num1, num2) => ({username: "bilal"}) 


console.log(addTwo(3,4));


const myArray = [2, 3, 4, 5, 6]

myArray.forEach(funtion () , {});
myArray.forEach(() => {}) 
