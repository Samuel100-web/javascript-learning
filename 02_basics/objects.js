// objects ko declare karny k 2 tariky hain 1 letrial or 2 constructr ki tara.
//agar constructor se object bany ga to hamesha Singleton object ho ga
//Object.create() // is tara se object create karny ko hee constructor method kaha jata hai

// Object Literals

const symb = Symbol("symbolKey")
const JsUser = {
    name: "Samuel",
    lastName: "Yaqoob",
    [symb]: "mysymbolKey",
    age: 33,
    email: "sami@gmail.com",
    location: "Karachi",
    isLoggedIn: false,
    lastLoginDay: ["monday", "Sunday", "tuesday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
JsUser.email = "samuel@chatgpt.com"
//Object.freeze(JsUser) // iss tara se object ko freeze kiya jata hai ta k koi value change na kar saky
JsUser.email = "sialtiel@gmail.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello my dear jani")
}
// console.log(JsUser.greeting)

//*************************************************** 

//const tinderUser = new Object()

const tinderUser2 = {}
tinderUser2.id = "12345"
tinderUser2.name = "Smauel"
tinderUser2.email = "samy@gmail.com"
tinderUser2.loggedIn = false
// console.log(tinderUser2)

const otherUser = {        
    email: "asif@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Samuel",
            lastName: "Yaqoob"
        }
    }
}
//console.log(otherUser.fullname.userFullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 5: "f"}

//const obj3 = {obj1, obj2} // iss ka result problemetic hai

 // {} bracess as a target use ho raha hai or baki sary source hain. ye syntax b kam hee use hota hai
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//ye syntax production me use hota hai., 3 dots ko sprid kaha jata hai, ye syntax simple b hai or latest ba hai.
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

// jab database se value aa rahi hoti hai to array form me aa rahi hoti hai
const users = [
    {
        id: 1,
        name: "samuel",
        email: "sami@gmail.com"
    },
    {
        id: 2,
        name: "Asif",
        email: "asif@gmail.com"
    },
    {
        id: 3,
        name: "Pater",
        email: "pater@gmail.com"
    },
]

users[1].email

 // yaha agar dekha jay to iss ki datatype array hai jab ka ham ne to array bnaya hee nai. iss liy ham jab b kisi object ko access karty hain to wo ek array ki surat me aata hai
 //console.log(Object.keys(tinderUser2))

 //jiss tara ham keys ko nikal sakty hain us tara ham values ko b nikal sakty hain.
 //console.log(Object.values(tinderUser2))

//**************************************************************
//object ki dstructureing karna
const course = {
    courseName: ".NET Core",
    price: 1500,
    courseInstructor: "Samuel Yaqoob"
}

const {courseInstructor: instructor} = course
//console.log(courseInstructor)
console.log(instructor)

//API data structure like API me object ka koi nam nai hota
// {
//     "name": "Samuel",
//     "age": "33",
//     "email": "sami@gmail.com"
// }

