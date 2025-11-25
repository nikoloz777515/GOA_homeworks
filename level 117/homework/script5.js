
// 6) Buffer - ის გამოყენებით, შექმენით 10 ადგილიანი მეხსიერება, მეორე არგუმენტად კი გადაეცით ascii ცხრილიდან რომელიმე სიმბოლო, ასო მაგალითად 'N', საბოლოო შედეგი კი დაბეჭდეთ


const buff = Buffer.alloc(10, "N")
console.log(buff)
console.log(buff.toString())