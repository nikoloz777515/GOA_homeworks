const add =  (a,b) => a + b
const substract =  (a,b) => a - b
const multiply =  (a,b) => a * b
const divide =  (a,b) => a / b

module.exports = {add,substract,multiply,divide}



// 1) შექმენით utils ფოლდერი, დაამატეთ ფაილი math.js სადაც შექმენით 4 მათემატიკურ ფუნქციას და დააექსპორტებთ, app ფაილში კი გამოიყენეთ require რომ დააიმპორტოთ ფუნქციები


// 2) process მოდულის გამოყენებით შექმენით პროგრამა, რომელსაც გაშვებისას გადავცემთ რიცხვებს (რაოდენობა უცნობიოა) მაგ:  node app.js 5 10 7 ... ასშ, თქვენი დავალებაა process მოდულის დახმარებით ეს რიცხვები ამოიღოთ და მათი ჯამი დაბეჭდოთ (აგრეთვე კომენტარებით ახსენით რას ნიშნავს  process)

// მინიშნება: დასერჩეთ node.js arguments from process module/object