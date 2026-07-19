// if

// const temperature = 40;

// if (temperature < 41) {
//     console.log("greater than 40 degree");

// } else {
//     console.log("temperature is less than 40");
// }

// <, >, <=, >=, ==, !=, ===, !==          Operators.

// const score = 200;

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else if (balance = 1200){
    // console.log("less than 5000");
// }
//  else {
    // console.log("less than 1000");
// }


const gmailLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = true; 

if (gmailLoggedIn && debitCard) {
    console.log("Allow to buy the course.");
}

if (gmailLoggedIn || LoggedInFromGoogle) {
    console.log("Allow")
}