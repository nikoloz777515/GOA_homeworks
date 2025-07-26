// 3) გამოიყენეთ reduce მეთოდი და განიხილეთ 3 სხვადასხვა მაგალითი (ერთი აუცილებლად უნდა იყოს სტრინგების შეერთებაზე)


let nums = [2,4,7,9,2]
let numsSum = nums.reduce((sum,curr) => sum + curr)
console.log(numsSum)


let names =["niko","ana","atuka"]
let namesSum = names.reduce((sum,curr) => sum+ curr)
console.log(namesSum)


let num = [2,4,7,9,2]
let nUmssum = num.reduce((sum,curr) => sum / curr,2)
console.log(nUmssum)
