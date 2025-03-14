// Loops investigation

//for loop syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is a best number")
    }
    //console.log(element)
}

for(let i = 1; i <= 10; i++){
    //console.log(`outer Loop: ${i}`)
    for(let j = 1; j <= 10; j++){
        //console.log(`Inner Loop value: ${j} and Inner loop ${i}`)
    }
}

// Loop for 1 se 10 tak tables 
for(let i = 1; i <= 10; i++){
    //console.log(`outer Loop ${i}`)
    for(let j = 1; j <= 10; j++){
        //console.log(i + " * " + j + " = " + i * j)
    }
}

// for loop use in Array

const myArray = ["Samuel", "Saba Sehar", "Asif Sultan", "Sialtiel Yaqoob", "Sajawal Sultan", "Balawal Sultan"]
//console.log(myArray.length)

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element)
    
}


// Break and continue statements
for (let index = 1; index <= 20; index++) {
   if(index == 7){
    //console.log(`Detected 7 value`)
    break;
   }
   //console.log(index) 
}

for (let index = 1; index <= 20; index++) {
    if(index == 7){
     //console.log(`Detected 7 value`)
     continue;
    }
    //console.log(index) 
 }

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // While Loop

 //let i = 1
 //while (i <= 10) {
    //console.log(i)
    //i++
 //}

// table with while loop

//  let a = 1
//  let b = 4
//  while (a <= 10) {
//     console.log(b + " X " + a + " = " + b * a)
//     a = a + 1
//  }

 

//let myArr = ["Samuel","Saba", "Asif", "Sajawal", "Sialtiel", "Balawal", "Fraz"]
//let arr = 0
//while (arr < myArr.length) {
    //console.log(`value is ${myArr[arr]}`)
    //arr = arr + 1
//}
let index = 1
while (index <= 10) {
    //console.log(`Value of index is: ${index}`)
    index = index + 3
}

//+++++++++++++++++++++++++++++++++++++++++

//do while loop

// table with (do while) loop
let i = 1
let j = 2

do {
    //console.log(j + " X " + i + " = " + j * i)
    i++
} while (i <= 10);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for of Loop, foreach loop, for on loop

// ye sab loops array specific loops hain jo k zyada tar array me use hoty hain

// waha keya khubsurat loop hai. maja aa gaya
const namesArray = ["Samuel", "Saba Sehar", "Menahil", "Farzana", "Reukhsana", "Sana"]

for (const i of namesArray) {
    //console.log(i)
}

const greeting = "Hello World!"
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`)
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Maps

// map hamesha unique value hee pik karta hai agar koi value ghalti se duble enter ho gai to map usy pick hee nahi karta. jesy k nichy example me show kiya gaya hai
const map = new Map()
map.set("PK", "Pakistan")
map.set("US", "United State of America")
map.set("IN", "India")
map.set("IN", "India")
map.set("Eng", "England")
map.set("UAE", "United Arib Emirate")
map.set("Fr", "France")
// console.log(map)

for (const [key, value] of map) {
 //console.log(key, ' :- ', value)   
}

// object par forof loop kesy kam karta hai

// const employeeObject = {
//     name: "Minahal",
//     age: 27,
//     designation: "Software Eng",
//     language: "javaScript & C#",
//     employeeId: 3134
// }

//for (const key in employeeObject) {
    //console.log(`${key} :- ${employeeObject[key]}`)
//}

// this loop is not suitable for objects. when I use this loop I face this error (employeeObject is not iterable)
// for (const [key, value] of employeeObject) {
//     console.log(key, value)
// }

// forin loop use in Arrays

const languageArray = ["Javascript", "C#", "Dot Net", "Java", "C++", "php", "SQL Server"]

for (const key in languageArray) {
    //console.log(`${key} ${languageArray[key]}}`)
}

// languageArray.forEach( (item) => {
// console.log(item)
// })

languageArray.forEach(item => {
    //console.log(item)
});

const hArray = [
    {
        name: "Farzana",
        age: 28,
        designation: "Staff Nurss",
        employeeId: 4332
    },
    {
        name: "Minahal",
        age: 27,
        designation: "Staff Nurss",
        employeeId: 4387
    },
    {
        name: "Saba Sehar",
        age: 30,
        designation: "Staff Nurss",
        employeeId: 3876
    },
    {
        name: "Rukhsana",
        age: 26,
        designation: "Staff Nurss",
        employeeId: 9876
    },
    {
        name: "Shazia",
        age: 28,
        designation: "Staff Nurss",
        employeeId: 9087
    }
]

hArray.forEach((item) => {
    console.log(item.employeeId)
})


