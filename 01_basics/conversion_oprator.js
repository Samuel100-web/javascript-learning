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
//console.log(typeof stringNumber)


//number ko b string me convert kiay ja sakta hai jesy k 99 ko string me convert kiya gaya to us ki type b string me convert ho gai hai. ab wo dikhny me to number hai leken type k hwaly se number nai raha.

//*************************** Operations ************************
let value = 3
let negvalue = -value
//console.log(negvalue)

//console.log(2+2) //plus operator
//console.log(2-2) //minus operator
//console.log(2*6) // multiplution operator
//console.log(2**2) //power of 2 operator
//console.log(2**3) //power of 3 operator
//console.log(2/10) //devided operator
//console.log(2%10) //reminder operator


//String Concatination process
let str1 = "Samuel"
let str2 = "Yaqoob"
let srt3 = str1 + " " + str2
//console.log(srt3)

//this is problems between number and string
//console.log(1 + "3")
//console.log(3 + "1")
//console.log("1" + 2 + 2)
//console.log(2 + 2 + "1")

//console.log(3+4*5%3); this syntax is not allowed

//console.log((3+4) * 3 % 4) this syntax is correct

//console.log(+true) //return 1, this is very bad code it is not good prectice
//console.log(+""); return 0

//prefix increment operator
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter)

//Postfix increment operator
// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter)