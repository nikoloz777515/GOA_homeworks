// reduce method
// 5) შექმენით რიცხვების მასივი, reduce method - ის გამოყენებით გამოთვალეთ ამ რიცხვების საბოლოო ჯამი

let numbers = [1,2,3,4,5,6,7,8,9,10]

let neWnumbers = numbers.reduce((sum ,element) => sum + element)
console.log(neWnumbers)