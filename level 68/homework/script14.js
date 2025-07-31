// 14) შექმენით string - ების მასივი, map მეთოდის გამოყენებით, გადააქციეთ თითო string - ი lowerCase ში და მოაშორეთ ყველა სთრინგს space - ი

const strtings = ["Hello Eveyone Today We Learn JavaScript"]

let filterteDstrings = strtings.map(str => str.toLocaleLowerCase().replace(/\s+/g, ''))

console.log(filterteDstrings)