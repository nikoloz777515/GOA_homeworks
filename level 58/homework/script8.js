// 8) შექმენით ერთი ფუნქცია გადაეცით მას ერთი პარამეტრი num, თქვენმა ფუნქციამ უნდა შეამოწმოს არის თუ არა კონკრეტული რიცხვი ლუწი თუ არის დააბრუნეთ რომ რიცხვი არის "Even" ლუწი სხვა შემთხვევაში კი დააბრუნეთ რომ "The Number Is Odd" ეს შემოწმება გააკეთეთ ternary operator - ის გამოყენებით, გამოიძახეთ ფუნქცია 4 ჯერ და გადაეცით მას პარამეტრად სხვადასხვა მნიშვნელობები



function check(num) {
  return(num % 2 === 0) ? "The Number Is Even" : "The Number Is Odd"
}
let numb1= check(9);
console.log(numb1);

let numb2= check(2);
console.log(numb2);

let numb3= check(99);
console.log(numb3);

let numb4= check(12);
console.log(numb4);
