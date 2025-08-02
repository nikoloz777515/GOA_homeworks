// 27) შექმენით ობიექტი შეინახეთ მასში რიცხვები მაგალითად {first: 1, second: 2, third: 3...}, თქვენი დავალებაა რომ დააბრუნოთ true boolean მნიშვნელობა თუ ყველა კუთვნილების მნიშვნელობა არის რიცხვი

let numbers ={
    first: 1,
    second: 2,
    third: 3 ,
    four: 4 ,
    five: 5
}

let numberCheeck = Object.values(numbers).every(num => typeof num === 'number')
console.log(numberCheeck)