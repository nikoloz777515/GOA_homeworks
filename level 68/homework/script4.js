// 4) მომხმარებელს შემოატანინეთ ორი რიცხვი, და ოპერატორი როგორიცაა + - * /, თუ მომხმარებელმა აირჩია + ნიშანი მაშინ მომხმარებლის მიერ შემოტანილი რიცხვები უნდა შეკრიბოთ და გამოიტანოთ console - ში, მსგავსად გააკეთეთ - * / - ის ნიშნებზე


const userInput = prompt('please enter a number')
let num1 = parseInt(userInput)

const userInput2 = prompt('please enter second number and')
let num2 = parseInt(userInput2)

const operator = prompt("please enter a operator between  + - * / ")

if(operator === "+"){
    console.log(num1 + num2)
}
else if(operator === "-"){
    console.log(num1 - num2)
}
else if(operator === "*"){
    console.log(num1 * num2)
}
else if(operator === "/"){
    console.log(num1 / num2)
}