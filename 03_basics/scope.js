// Programming Scopes

// let a = 10;
// const b = 40;
// var c = 50;
// console.log(a)
// console.log(b)
// console.log(c)

//scope is {} braces isi ko scope bolty hain ye scope hamy functions ke b nazar aata hai yehi scope hamy loops or (if, else) me b nazar aata hai. wesy object me b {} braces hoty hain lekan wo object decleration hain wo koi scope nahi hai

//jo b ham  {} braces k andar likh rahy hain wo block scope hai or jo bahar likha hain wo Global scope hai. Global scope me ham jo b variables ye method declare karty hain wo scope k andar accessable hoti hai jab k scope k andar jo b variables ya method hoty hain wo accessable nahi hoty.
if(true){
    let a = 10;
    const b = 40;
    var c = 50;
}

//console.log(a)
// a traceable nai hai q k ham usy scope k bahar trace karny ki koshish kar rahy haih

//console.log(b) 
// // same a ki tara b bhi traceable nahi hai

//console.log(c) 
// // lekan c traceable hai jo k bilkul ba achi bat nahi hai. q k c scope k andar hony k bawjud b trace ho raha hai. isi liy ham var kabi nahi lety hamesha (let or const) lety hain.


//swal ye hai k keya ham function k andar function me parent function k variables ko access kar sakty hain? definately kar sakty hain q k function one tow ka parent hai or chaild apny parent k tamam code ka access le sakta hai lekan parent child k variables ko access nahi kar sakta.. issi ko (closure) b bola jata hai k outer function to inner function me run ho jata hai but outer function me inner function run nahi ho sakta.
function one(){
    const username = "Samuel"
    function two(){
        const webSite = "SS&Y IT Solution"
        console.log(username)
    }
    //console.log(webSite); 
    // // ye yahi par execute ho gaya or two kabi execute huwa hee nahi isi liy error aya k webSite is not defined

    //two()
}
//one()

if(true){
    const username = "Peter";
    if(username == "Peter"){
        const website = " SS&Y IT Solution"
        //console.log(username + website)
    }
    //console.log(website)
}
//console.log(username)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))
function addone(num){
return num + 1
}


const addTwo = function(num2){
return num2 + 2
}
console.log(addTwo(5))
