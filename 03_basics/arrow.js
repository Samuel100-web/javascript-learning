// Arrow functions
//arrow function ko samjny k liy hamy object ka pata hona zruri hai or (this keyword) k use ka b pata hona  chahiy (this keyword hamesha current) object ko refer karta hai.


const users = {
userName: "Samuel Yaqoob",
age: 33,
email: "sami@gmail.com",
password: "03075941955",
welcomeMessage: function(){
    console.log(`${this.userName}, Welcome to my Website`)
    console.log(this)
}
}
// users.welcomeMessage()
// userName = "Sialtiel Yaqoob"
// users.welcomeMessage()

//console.log(this)

//function user(){
    //let username = "Samuel"
    //console.log(this.username) 
    // iss tara se ham (this keyword) use nahi kar sakty q k ye sirf current object ko hee trace karta hai.
//}
//user()

// const user = function(){
//     const username = "Samuel"
//     console.log(this.username) // iss tara b run nahi ho sakta same situation
// }
// user()


// this is a arrow function
// const user = () => {
// const username = "Samuel"
// console.log(this.username)
// }
// user()

// const addTwo = (num1 , num2) =>{
// return num1 + num2
// }
// console.log(addTwo(10, 5))

// iss ko implicite return kaha jata hai. ye 1 line me he statement likhni hoti hai
// const addTwo = (num1 , num2) => num1 + num2
    
//     console.log(addTwo(10, 5))

//ye b arrow function ka hee 1 syntax hai. agar {} braces use karty hain to return keyword use karna pary ga or agar () use kary to return keyword use karty hain
// const addTwo = (num1 , num2) => (num1 + num2)
    
//     console.log(addTwo(10, 5))

//Object return karny ka tarika
const addTwo = (num1 , num2) => ({username: "Samuel"})
    
    console.log(addTwo(10, 5))