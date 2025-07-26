//  შექმენით რიცხვების მასივი, თქვენი დავალებაა, რომ findIndex method - ის გამოყენებით იპოვოთ ისეთი რიცხვის index - ი რომელიც იყოფა 7 

let numbers = [2,11,33,41,70,7,21,28,50,77,32,14]

let inDexofnumbers = numbers.findIndex(function (num,indx){
    return num % 7 === 0
})



console.log(inDexofnumbers)