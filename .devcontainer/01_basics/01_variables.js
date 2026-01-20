const accountId = 121212
let accountEmail = "hello@bilal.com"
var accountPassword = "121212" 
accountCity = "Faisalabad"
let accountState;

console.log(accountId);

/* Prefer not to use var 
because of issue of block scope and funtional scope
*/


console.table ({accountId, accountEmail, accountPassword, accountCity, accountState})
