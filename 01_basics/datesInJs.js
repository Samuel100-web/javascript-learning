//Date
let myDate = new Date()
//console.log(myDate)
//console.log(myDate.toString())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
//console.log(myDate.toISOString())
//console.log(typeof myDate) //date ka type object aata hai

//koi b spicefic date declare karny k liy
let myCreatedDate = new Date(2024, 0, 23) //JavaScript me month 0 se start hoty hain. jesy k Jan ka month 0 hota hai
//console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Math.floor(Date.now()/1000))

console.log(myCreatedDate.toLocaleString("default",{
    weekday: "long"
}))