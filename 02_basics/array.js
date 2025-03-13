//Array
//Javascript k array resizeable hoty hain yani ham iss me value nikal b sakty hain or add b kar sakty hain. or iss me kisi b datatype ki value put ki ja sakti hai, matlab number, string, boolean, symbole, object, array k andar array b ho sakty hain, kisi b type ki value put kar sakty hain

// Array ki value Index se accese ki jati hai
//Array me jab b copy operation karty hain to ye hamesha Shallow conpy bnata hai
//(Shallow copy of an object is a copy properties share the same reference (points to be same underlying value) as those of the source object from which the copy was made.)
//matlab jo b changing ki jay gi wo original array me b change ho ga.

//Deep copy
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying value) as those of the source object from  which the copy was same.

// Array k andar b hamy prototype access milta hai or us me ek property milti hai (Array.length) jis se ham array ki length malom kar sakty hain.
const myArr = [0, 1, 2, 3, 4, 5, 6, true, "Samuel"]

const usernames = ["Samuel", "Asif", "Peter", "Sialtiel"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log([2])

// Array Methods
// push method value add karny k liy use kiya jata hai
//myArr.push(7)

// pop method me hamy koi b argoment nai dena hota. ye array ki last value ko remove kar deta hai.
//myArr.pop()

// unshift method argoment me di hai value ko start me add kar deta hai. problam ye hai k hamy sari value shift karni pari iss se time boht zaida consume hota hai.
//myArr.unshift(5)

// shift method se start ki value remove ho jati hai.
//myArr.shift()

// includes method ham question k liy use karty hain for example ham ne sawal kiya k (myArr) me 9 hai ya nahi? agar huwa to true answer aay ga warna false. importent ye nai k answer kiya aay ga important ye hai k datatype keya ho ga. feature me agar ham is method ka use karty hain to hamy pata ho ga k iss ka result keya aany wala hai iss se ham value ko judge kar sakty hain.
//console.log(myArr.includes(9))

//console.log(myArr.indexOf(2))

// yaha par value to same he aay gi lekan yaha type change huwa hai. string type ka array ban jata hai
// const newArr = myArr.join() 

// console.log(myArr)
// console.log(newArr)


// Slice, splice Methods

// console.log("A", myArr)
const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B", myArr)

const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log("C", myArr)

const doctors = ["Asif", "Peter", "Shehzad", "Saba"]
const nurses = ["Farzana", "Minahal", "Rukhsana", "Kashif"]

 // agr ham iss tarha direct push karty hain to array k andar array aa jata hai. hamy kuch iss tara ka print aay ga... 
//[
    //'Asif',
    //'Peter',
    //'Shehzad',
    //'Saba',
    //[ 'Farzana', 'Minahal', 'Rukhsana', 'Kashif' ]
  //] iss ne second array ko as a element hee le liya hai
//doctors.push(nurses)
//console.log(doctors)
//console.log(nurses[3][1])

const allEmployees = doctors.concat(nurses) // iss surat me dono array properly marge ho jaty hain
//console.log(allEmployees)

// array ko marge karny k liy sprid operator b use kiya jata hai
const all_new_employees = [...doctors, ...nurses]
// console.log(all_new_employees)

const another_array = [1,2,3,4,5, [4,6,7,8], 9,5,[5,3,6,[2,5,3,6]]]
const real_array = another_array.flat(Infinity)
// console.log(real_array)

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))


