// 1) შექმენით ფაილი სახელად functions.js სადაც თქვენ გექნებათ რაიმე ფუნქციები მაგალითად greetUser, guessNumber etc. ეს ფუნქციები დაა - export - ეთ და გამოიყენეთ თქვენს მთავარ ფაილში
// // package.json - ის ფაილში "type" ს მიანიჭეთ შესაბამისი მნიშვნელობა

const { greetUser, guessNumber } = require("./functions");

console.log(greetUser('niko'));
console.log(guessNumber(7,8))

