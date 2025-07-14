//  2) შექმენით ერთი მასივი სადაც თქვენ შეინახავთ რიცხვებს, for ციკლის გამოყენებით გამოთვალეთ მასივში მოცემული ყველა რიცხვის საბოლოო ჯამი  

let numbers = [2,5,8,11]
let sum = 0

for(let i = 0; i< numbers.length; i++){
    sum += numbers[i]
}

console.log(sum)