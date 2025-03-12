const name = "Samuel"
const gitaccount = "Samuel Yaqoob"
//console.log(name + " " + gitaccount + "Value") // aisy likhny ka tarika old hai ajj kal aisy nai khna chahiy or back ticks use karni chahiy ye hamy Tabkey k upar milti hai

//console.log(`Hello my name is ${name} and my git account is ${gitaccount}`) // ye syntax ka modran way hai, iss ko string interpolation b bola jata hai

const nametwo = new String("Sialtiel Yaqoob")

// console.log(nametwo.__proto__)

// console.log(nametwo.length)
// console.log(nametwo.toUpperCase())
// console.log(nametwo.slice())
// console.log(nametwo.split())
// console.log(nametwo.charAt(5))
// console.log(nametwo.indexOf("Y"))

const newName = nametwo.substring(0, 5)

//console.log(newName)

const anotherName = newName.slice(-8, 4)
//console.log(anotherName)

const nameone = "     Samuel   "
//console.log(nameone)
//console.log(nameone.trim()) //trim method spaces ko remove kar deta hai, trimstart or trimend b ek method hota hai jo start or end ki spaces ko remove krta hai

const url = "https://samuel.com/sami%20randhawa" //
//const url = "https://samuel.com/sami randhawa" //
//console.log(url.replace('%20', '-'))
//console.log(url.includes('samuel'))
const para = "The-quick-brown-fox jumpes over the lazy dog."
//console.log(para.split('-'))
console.log(para.small())
