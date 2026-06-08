// Immediately Invoked Function Expressions (IIFE)

// (function chai () {
    //  This is named iffe
//     console.log(`DB CONNECTED`);
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name} `);
}) (`Bilal`)

// function chai () {
//     console.log(`DB CONNECTED`);
// }

// chai()