//let score = "55abc"
//let score = null
//let score = undefined
let score = true
//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))
//console.log((valueInNumber))

//"55" => 55 type is number
//"55abc" => return NaN but type is number
//null => return NaN but type is number
//true => 1 type is Number
//false => 0 type is Number
//undefined => NaN but type is number

// if any variabel value is 1 or 0 so convert it value is true or false

let isLogedIn = "samuel"
let booleanIsLogedIn = Boolean(isLogedIn)
//console.log(booleanIsLogedIn)
//agar ham Empty String rakhty hain to return value false aati hai or agar koi value string me rakhty hain to value true aati hain

let someNumber = 99
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
//number ko b string me convert kiay ja sakta hai jesy k 99 ko string me convert kiya gaya to us ki type b string me convert ho gai hai. ab wo dikhny me to number hai leken type k hwaly se number nai raha.