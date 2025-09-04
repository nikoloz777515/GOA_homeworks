// 1) დააინტალირეთ Node.js

// 2) შექმენით js ფაილი დაწერეთ პატარ პროგრამა მაგ: მასივის ფილტრაციოა for ციკლის გამოყენებით და გაუშვით Node.js დახმარებით (თუ გინდათ შეამოწმეთ task manager) (აუცილებლად ახსენით კომენტარებით რა არის გამშვები გარემო, რამდენი გამშვები გარემო გვაქვს, რა არის REPL) აგრეთვე გატესტეთ repl მუშაობაც ტერმინალში უბრალოდ ბრძანება node ით 

const numbers = [5, 12, 4,6,7,8]
const oddNumbers = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]); 
  }
}
console.log('odd number is', oddNumbers)

