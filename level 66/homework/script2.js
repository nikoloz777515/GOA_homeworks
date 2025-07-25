// 2) შექმენით რიცხვების მასივი, filter მეთოდის გამოყენებით გამოიტანეთ მხოლოდ ისეთი რიცზვები რომლებიც მეტია 10 -
// ზე

let num =[3,4,11,222,777,40,23,2,9,8,7]

let filtered = num.filter(num =>{
    return num >=10;
})

console.log(filtered)