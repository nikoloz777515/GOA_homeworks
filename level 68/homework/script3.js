// 3) მომხმარებელს შემოატანინეთ რიცხი შეამოწმეთ არის თუ არა ის დადებითი, უარყოფითი, ნული, ათწილადი, მთელი, გამოიტანეთ შესაბამისი ტექსტები

const userInput = prompt("please enter a number")

let number = parseFloat(userInput)

if (number > 0) {
    console.log('ეს რიცხვია დადებითია')
} 
else if (number < 0) {
 console.log('ეს რიცხვი უარყოფითია ')
} 
else {
 console.log('ეს რიცხვია 0')
}

if (Number.isInteger(number)) {
    console.log('ეს რიცხვია მთელი')
} 

else {
    console.log('ეს რიცხვი ათწილადია')
}