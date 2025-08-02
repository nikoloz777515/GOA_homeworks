// 5) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ დაითვალოთ თუ რამდენი ლუწი და კენტი რიცხვები 
//  არის მოცემული მასივში 

const numbers = [2,3,4,7,6,11,13,90,99,21,99]

let Evencount = numbers.filter(num => num % 2 === 0).length

let Oddcount = numbers.filter(num =>num % 2 !== 0).length
    
console.log(`სიაშია ${Evencount} ლუწი`);

console.log(`სიაშია ${Oddcount} კენტი`)