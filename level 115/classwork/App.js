// const {add,substract,divide,multiply} = require("./utils/Math")

// console.log(add(7,8))
// console.log(substract(7,2))
// console.log(divide(6,3))
// console.log(multiply(6,2))

const args = process.argv.slice(2)

const numbers = args.map(Number)

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum)

// process არის Node.js ის გლობალური ობიექტი რომელიც აღწერს მიმდინარე პროცესს ამ ობიექტის მეშვეობითა მით შეგვიძლია 
// მივიღოთ პროგრამის არგუმენტები (argv)
//  ან შევაჩეროთ პროგრამა (process.exit())
// ანუ process არის ინტერფეისი Node.js აპლიკაციასთან მიმდინარე პროცესიებისათვის


// 2) process მოდულის გამოყენებით შექმენით პროგრამა, რომელსაც გაშვებისას გადავცემთ რიცხვებს (რაოდენობა უცნობიოა) მაგ:  node app.js 5 10 7 ... ასშ, თქვენი დავალებაა process მოდულის დახმარებით ეს რიცხვები ამოიღოთ და მათი ჯამი დაბეჭდოთ (აგრეთვე კომენტარებით ახსენით რას ნიშნავს  process)

// მინიშნება: დასერჩეთ node.js arguments from process module/object