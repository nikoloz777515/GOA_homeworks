// შექმენით რიცხვების მასივი, reduce method - ის გამოყენებით გამოიტანეთ ამ რიცხვების მასივიდან ყველაზე დიდი რიცხვი

let numbers = [3,7,12,777,44,125,271,173]

let BigestNumber = numbers.reduce((number,current) => Math.max(number,current))

console.log(BigestNumber)