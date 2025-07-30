// 2) მომხმარებელს შემოატანინეთ რაიმე წელი და განსაზღვრეთ არის თუ არა ის ნაკიანი თუ არის console - ში გამოიტანეთ რომ 'The ${userInput} is leap year' სხვა შემთხვევაში კი 'The ${userInput} is not a leap year'


let userInput = prompt("please enter a year")

let year = parseInt(userInput)



if( ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))){
    window.alert('The ${userInput} is leap year')
}else{
    window.alert('The ${userInput} is not a leap year')
}

