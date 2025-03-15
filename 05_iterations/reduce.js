const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumber.map((num) => {
//     return num + 10
// })


//map ko chaning karny ka tarika
const newNumber = myNumber
            .map((num) => num * 10)
            .map((num) => num + 3)
            .filter((num) => num >= 30)
//console.log(newNumber)


//reduce method Investigation

//reducer me ham pehly ek initialvalue lety hain, iss me ek (accumulator value, or currentvalue) hoti hai jo collback function me dali jati hai, start me accumulator me initialvalue hoti hai, bad me currentvalue or array ki value pluss ho kar accumulator me chali jati hai

// syntax of reducer

//const array1 = [1,2,3,4,5,6,7,8,9]
//const initialvalue = 0
//const sumWithInitial = array1.reduce((accumulator, currentVlaue) => accumulator + currentValue, initialVlauel);
//console.log(sumWithInitial);

// start Here

// const myNum = [1,2,3]
//const myTotal = myNum.reduce(function(accumulator, currentValue) {
/*
    accumutlaor or currentValue karny investigation se result kuch iss tara se ata hai
    console.log(`accumulator Vlaue: ${accumulator} currentValue: ${currentValue}`)
    this is Result
    accumulator 0 currentValue 1
    accumulator 1 currentValue 2
    accumulator 3 currentValue 3
*/

// return accumulator + currentValue
// }, 0)
// console.log(myTotal)

//End here

//Start Here with Arrow function
/*
const myNum = [1,2,3,4,5,6,7,8]

const myTotal = myNum.reduce((accum, currentVal) => accum + currentVal, 0 )
console.log(myTotal)
*/

//End Here with Arrow function


//Code starts
//Example of Feching data from shoppingCart via reduce method
/*
const shoppingCart = [
    {
        itemName: "Shalwar Kurta",
        price: 4999,
    },
    {
        itemName: "Pent Shirt",
        price: 3000,
    },
    {
        itemName: "Shose",
        price: 2999,
    },
    {
        itemName: "History Book",
        price: 999,
    },
    {
        itemName: "Fashion Book",
        price: 1000,
    },
    {
        itemName: "Mobile",
        price: 30000,
    },
]
const totalPrice = shoppingCart.reduce(function(acc, item){
    return item.price + acc
}, 0)
console.log(totalPrice)
*/
//Code End Here

