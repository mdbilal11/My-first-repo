const name = "Bilal"
const repoCount = 40

//console.log(name + repoCount + " Value"); This is old and normal way.

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} `); // This way is called
// string interpulation.

const gameName = new String (`Bilal-hc`)

//console.log(gameName[3]); // Key value pair method

// String functions 

//console.log(gameName.__proto__);
//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(0));
//console.log(gameName.indexOf(`B`));

const newString = gameName.substring (0, 4)
//console.log (newString); 

const anotherString = gameName.slice (-8, 4)
//console.log(anotherString);

const myname = "   Bilal    "
//
//console.log(myname);
//console.log(myname.trim());

const url = "https://bilalagency.com%20gymwebsite"
//console.log(url.replace(`%20`, `/`));

//console.log(url.includes(`Numan`));

console.log(gameName.split(`-`));
