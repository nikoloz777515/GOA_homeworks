// some, every methods

// 13) მოიძიეთ ინფორმაცია some, every მეთოდებზ, თითოეულზე გააკეთეთ 5-5 მაგალითი


// every()-method 

let numbers = [2,4,6,8,10]

let Cheecked = numbers.every(chck => chck %2 === 0)
console.log(Cheecked)





let ages = [18,22,19,24,27,19]
let Filteredages = ages.every(age => age >=18)
console.log(`this ages are adult ${Filteredages} `)




let cars = [
    {model: "corolaa",year:2011},
    {model: "Rx-450h",year:2012},
    {model: "C300",year:2013},
    {model: "G-class",year:2021},
]


let Newcars = cars.every(years =>years.year >= 2011)

console.log(Newcars)






let num =[3,7,9,8]

let Oddnum = num.every(Odd => Odd % 2 !==0)

console.log(Oddnum)


let youOnline = [ 
    {model: "Lenovo",position: "active"},

    {model: "Mackbook",position: "offline"},

    {model: "Asus",position: "active"},

    {model: "Acer",position: "active"},
]

let OnlineOroffline = youOnline.every(chck => chck.position === "active")

console.log(OnlineOroffline)











// some()-method 



let number = [1,13,9,3,1]

let Cheeck = number.some(chcke => chcke %2 === 0)
console.log(Cheeck)





let agess = [18,22,19,24,27,12]
let Filteredagess = agess.some(age => age >=18)
console.log(`this ages are adult ${Filteredagess} `)


let carss = [
    {model: "corolaa",year:2001},
    {model: "Rx-450h",year:2012},
    {model: "C300",year:2013},
    {model: "G-class",year:2021},
]


let Newcarss = carss.some(years =>years.year >= 2011)

console.log(Newcarss)





let nums =[2,4,6,8]

let Oddnumm = nums.some(Odd => Odd % 2 !==0)

console.log(Oddnumm)



let youOnlinee = [ 
    {model: "Lenovo",position: "offline"},

    {model: "Mackbook",position: "offline"},

    {model: "Asus",position: "offline"},

    {model: "Acer",position: "offline"},
]

let OnlineOrofflinee = youOnlinee.some(chck => chck.position === "active")

console.log(OnlineOrofflinee)








