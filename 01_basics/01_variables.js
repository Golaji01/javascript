const accountId= 144553
let accountEmail= "ujjwalgola@gmail.com"
var accountPassword="123456"
accountCity="uttar pradesh"
let accountState;

//  accountId = 2 // not allowed

accountEmail="ujjgola@gmail.com"
accountPassword="121212"
accountCity="delhi"

console.log(accountId);

/*
prefer not to use var because  
of issue in scope or functional scope.

gives undefined if we are not declare the value of variable.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
