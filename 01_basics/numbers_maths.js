const price = 400 // iss surat me Javascript autometicly isy number datatype de ga
const balance = new Number(500) // yaha par ham khud se datatype de rahy hain
//console.log(balance)
//console.log(typeof balance.toString().length) //yaha par balance variable ka datatype change ho chuka hai
//console.log(balance.toFixed(2))

const anothernum = 23.895
//console.log(anothernum.toPrecision(2))

const num1 = 1000000
//console.log(num1.toLocaleString('en-IN'))

//+++++++++++++++++++ Maths +++++++++++++++++++++++++++

//maths lab javascript ka sath by default aati hai
//console.log(Math); // Math apny ap me ek Object hai or iss k ander boht sari properties hain

//console.log(Math.abs(-4)) //abs method - ko + me convert kar deta hai
//console.log(Math.round(6.3)) //round method kisi b decimal value ko round kar deta hai
//console.log(Math.ceil(7.9)) //ceil method uper value chose karta hai
//console.log(Math.floor(8.4)) // floor method lowerset value chose karta hai

//console.log(Math.random()) // Math.random ki value hamesha 0 or 1 k darmyan aati hai
//console.log(Math.random() * 10 + 1 ) // agar isy 10 se multiplay kar de to ek value left side me shift go jati hai

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)