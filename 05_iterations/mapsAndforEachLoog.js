const coding = ["js", "C#", "Java", "Python", 'C', "C++", "Rubi", "Angular"]

//forEach loop kabi b return kuch nai karta
// const values = coding.forEach((item) => {
//     //console.log(item)
//     return item
// })

// console.log(values)

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.filter((num) => num <= 8)
// console.log(newNum)

// const newnum = numbers.filter((num) => {
//     return num > 4
// })
// console.log(newnum)


//forEach loop me array ki values return karwany ka tarika
// const newNumber = []
// numbers.forEach((num) => {
//     if(num > 4){
//         newNumber.push(num)
//     }
// })
// console.log(newNumber)

const books =[
    {
        title: "book one",
        genre: "Ficition",
        publish: 1981,
        edition: 2004
    },
    {
        title: "book two",
        genre: "non-Ficition",
        publish: 1992,
        edition: 2008
    },
    {
        title: "book three",
        genre: "History",
        publish: 1999,
        edition: 2007
    },
    {
        title: "book four",
        genre: "non-Ficition",
        publish: 1989,
        edition: 2010
    },
    {
        title: "book five",
        genre: "Science",
        publish: 2009,
        edition: 2014
    },
    {
        title: "book six",
        genre: "Ficition",
        publish: 1987,
        edition: 2010
    },
    {
        title: "book siven",
        genre: "History",
        publish: 1986,
        edition: 1996
    },
    {
        title: "book eight",
        genre: "Science",
        publish: 2011,
        edition: 2016
    },
    {
        title: "book nine",
        genre: "non-Ficition",
        publish: 1981,
        edition: 1089
    },
]

// const userbooks = books.filter((bk) => bk.genre === "History")

const userbooks = books.filter((bk) => {
    return bk.publish <= 1995 && bk.genre === "History"
})
console.log(userbooks)