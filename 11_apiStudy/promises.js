// Start Code
//  Iss tara promise create kiya jata hai
const promiseOne = new Promise((resolve, reject) => {
    //Do an async task
    setTimeout(() => {
        console.log("Async task is completed")
        resolve() // resolve ek method hai jisy call karwana zaruri hota hai warna ye kabi consume hee nahi ho ga yani ham issy .then k sath consume karty hain
    }, 1000)
})

// or iss tara promise consume kiya jata hai

promiseOne.then(() => {
    console.log("Promise is consumed")
})
// End Code
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Start
// Promise ko variable me store karna b zaruri nahi hai isy iss tara b bna sakty hain

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two")
        resolve()
    }, 1000)
}).then(() =>{
    console.log("Promise two is consumed");
});
// End
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Start
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({userName: "Samuel", email: "sami@example.com"})
    }, 1000)
})

promiseThree.then((user) =>{
    console.log(user)
});
// End
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Start
// Ye promise ko profecinaly handle karny ka tarika hai.

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName: "Sialtiel", email: "sialtial@example.com", password: "12345"})
        }else{
            reject('Error: Somthing went Wrong')
        }
    },1000)
})

// yaha se promise consume kiaya gaya hai
promiseFour
.then((user) => {
    console.log(user)
    return user.userName
})
.then((username) => {
console.log(username)
})
.catch((error) => {
console.log(error)
})
.finally(() =>{
    console.log("The Promise is either resolved or rejected!")
});
// End
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// start
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let error = true;
        if(!error){
            resolve({userName: "JavaScript", password: "123@smai"})
        }else{
            reject("Erroe: Not Found! Try again!")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()
// End
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Code Started

// API call throw the function
/*
async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()

// Code end

*/

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((error) => console.log(error))

    



