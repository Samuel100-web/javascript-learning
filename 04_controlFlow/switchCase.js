//Switch Case Study

// this is switch case syntax, iss me hmary pass ek Key hoti hai or us me ham multiple values check karty hain or har value k bad (break) keyword ka use hota hai, (break) keyword control flow ko break kar deta hai agar break na lagay to us k bad wala sara code run kar jata hai. swaey default k.
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const weak = 8;
// switch (weak) {
//         case 1: console.log("Monday")        
//         break;
//         case 2: console.log("Tuesday")
//         break;
//         case 3: console.log("Wendesday")
//         break;
//         case 4: console.log("Thuresday")
//         break;
//         case 5: console.log("Friday")
//         break;
//         case 6: console.log("Seturday")
//         break;
//         case 7: console.log("Sunday")
//     default: console.log("Number of weak out of range")
//         break;
// }

//++++++++++++++++++++++++++++++++++++++++++++++
//truthy and falsy values

const userEmail = "sami@gmail.com" // iss surat me to hamy value mill jay gi q k value majud hai lekan.
const userEmail2 = "" // iss surat me keya ho sakta hai
const userEmail3 = []

// if(userEmail){
//     console.log("User Logged In")
// }else{
//     console.log("user not found")
// }

// user not found aa raha hai, issi ko hee falsy value kehty hain.

// if(userEmail2){
//     console.log("User Logged In")
// }else{
//     console.log("user not found")
// }

// truthy or falsy value kon kon see hoti hain?
//falsy values
// false, "", 0, -0, Bigint me 0n, null, undefined, NaN 
// iss k alawa sab truthy values hain

// truthy values
// true, "0", "false", " ", [], {}, function(){}

//Empty Array check karny ka tarika
// if(userEmail3.length === 0){
//     console.log("Array is Empty")
// }

// Empty Object check karny ka tarika
const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is Empty")
// }

//comprision some values
// false == 0 => true
// false == "" => true
// 0 == '' => true