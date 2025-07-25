//  7) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ map მეთოდის გამოყენებით გამოიტანოთ თითოეული სიმბოლო string - ში, ამისთვის მოიძიეთ toString() მეთოდი

const numbers = [3,5,7,8,99,1,90,22,34]

let numbersTostring = numbers.map(num =>{
    return num.toString()
})

console.log(numbersTostring)