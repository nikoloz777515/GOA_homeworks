//  -- 25) შექმენით ცვლადი, მაში შეინახეთ string - ი, დაითვალეთ ხმოვნების რაოდენობა და დაბეჭდეთ ის, გადაუარეთ string - ს for of - ის დახმარებით

const strings = 'hello everyone today we learn java script'
let wowelss = ['a','e','i','o','u']
let count = 0

for(let str of strings){
    if(wowelss.includes(str)){
        count++
    }
}

console.log(`სიაშია ${count} ხმოვანი`)