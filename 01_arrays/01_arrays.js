// ARRAYS

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Imran Khan", "Akbar", "Ali"]

const myArr2 = new Array (0, 1, 2, 3, 4, 5)
// console.log(myArr[1]);

// Arrays methods

// myArr.push(6)    // Value add karta hai end py
// myArr.push(7)    
// // console.log(myArr);

// myArr.pop()     // Value remove karta hai end wali 
// console.log(myArr);

// myArr.unshift(5)
// myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// Slice and Splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

