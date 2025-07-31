// 13) შექმენით ერთი მასივი, მოიძიეთ ინფორმაცია indexOf მეთოდის შესახებ, ამის გამოყენებით წაშალეთ ისეთი მნიშვნელობები რომლებიც მეორდება ბევრჯერ

const numbers = [2,3,4,5,2,6,5,8,7,6,5,7,]

let numberFilter = numbers.filter((num,index,arr) => {
    return arr.indexOf(num) === arr.lastIndexOf(num)
})


console.log(numberFilter)