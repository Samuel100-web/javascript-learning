//In prgramming languages two types of datatype primitive and non primitive

//Primitive
//String, Number, boolean, null, undefined, Symbol, bigint
//kisi b value ko unique banaby k liy symbol datatype use ki jati hai

const score = 100 //this is Number datatype
const scorevalue = 100.2 //this is also Number datatype
const isLoggedIn = false // Boolean datatype
const outsideTemp = null //completly empty value, datatype is object
let userEmail; //datatype is undefined
const id = Symbol('12345')
const anotherId = Symbol('12345')

//console.log(id === anotherId)

const bigNumber = 984708372788n // yaha javascript ki datatype bigint use ho rahi hai

//console.log(typeof bigNumber)



// Reference type ya (non Primitive) datatype

//Array, Objects, Functions

const names = ["Samuel", "Asif Sultan", "Peter", "Sajawal"] // This is a Array

let myObj = {
    name: "Samuel",
    age: 33,
    email: "sami@gmail.com",
    loggedIn: true
} // this is a object, jab ham koi b value {} bracess me likhty hain to usy object bola jata hai


//JavaScript me function ko b ek variables ki tara treat kiya ja sakta hai
const myfunction = function (){
    console.log("Hello World...!")
}
myfunction()

// Kisi b variable ka datatype pata karny k liy (typeof) key word ka use kiya jata hai, jesy k

console.log(typeof bigNumber)
