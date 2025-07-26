//  შექმენით სახელების მასივი, findIndex - ის გამოყენებით იპოვეთ იმ სახელის index - ი რომლის ასოც იწყება 'M' - თი

const names = ["Niko","Ana","Atuka","Mari"]

let namesIndex = names.findIndex(index => index.startsWith("M"))


console.log(namesIndex)