const accountId = 229874
let userName = "Asif Sultan"
var userEmail = "sami@gmail.com"
var password = "sami123"
country = "Pakistan"
let accountState; //only declare variable. if variable only declared so value is undefined


userEmail = "asif@gmail.com"
password = 123456
//accountId = 8974 //again not allowed assign constant variable
//console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, userName, userEmail,password,country])