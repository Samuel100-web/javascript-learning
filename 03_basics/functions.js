//Functions study

//function ka matlab k ek bunch of code jisy ham bar bar kahi b use kar sakty hain

//This is function deffination
function saymyName(){
    console.log("s")
    console.log("a")
    console.log("m")
    console.log("u")
    console.log("e")
    console.log("l")
}
//saymyName; //this is fuction reference

 //agar execute krwan hai to iss tara
//  saymyName()

function addTowNumber(num1, num2){
    //if(num1 == Number && num2 == Number){
        console.log(num1*num2)
        console.log(num1+num2)
        console.log(num1-num2)
    //}
    //else{
        //console.log("your number datatype is not correct")
    //}    
}

function addTowNumber(num1, num2){
    // let result = num1 + num2
    // return result
    //console.log("Peter") // ye console kabi b print nahi ho ga q k function ka ek rull hota hai k return keyword k bad wala koi b code execute nahi hota

    return num1 + num2 // iss ko direct b return kiya ja sakta hai
        
}
const result = addTowNumber(7, 5)

//console.log(result) // yaha result ki value rndefined aati hai

//by default value deny ka tarika function me perameter dety waqt parameter ko value assign kar do.
function loggedInUserMsg(username="Asif Sultan"){
    if(!username){
        console.log("Please enter user name")
        return
    }else{
        return `${username} Logged in`        
    }
}
//console.log(loggedInUserMsg())

function calculateCartPrice(...number1){
return number1
}
//console.log(calculateCartPrice(50,100,150,200,250,300)) 
// iss situation me hmara first element to print ho gaya hai lekan dusry element print nahi huvy. iss problem ko solve karny k liy hamary pass ek (rest operator) hota hai us ka use kar sakty hain. iss ko (sprid operator b bola jata hai). iss k use case par depand karta hai k kab isy rest boly gy or kab isy sprid boly gy.

const user1 ={
    name: "Samuel",
    price: 199
}
function handleObject(anyObject){
console.log(`User Name is ${anyObject.name} and price is ${anyObject.price}`)
}
// console.log(handleObject(user1))
handleObject({
    name: "Sialtiel",
    price: 999
})

const priceArray = [200, 900, 600, 500, 300]
function returnvalue(getArray){
 return getArray[2]
}
// console.log(returnvalue(priceArray))
console.log(returnvalue([300,400,500,600]))

