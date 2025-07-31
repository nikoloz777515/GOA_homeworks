// 15) reduce მეთოდის დახმარებით შეამოწმეთ თუ რამდენჯერ მეორდება თითო ელემენტი სიაში

const num = [1,2,3,4,5,6,7,7,8,9,10,2,3]

let reducEnum = num.reduce((aacum,current) =>{
    aacum[current] = (aacum[current] ||0) + 1
    return aacum
},{})
console.log(reducEnum)