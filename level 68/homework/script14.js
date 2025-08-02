// 14) შექმენით string - ების მასივი, map მეთოდის გამოყენებით, გადააქციეთ თითო string - ი lowerCase ში და მოაშორეთ ყველა სთრინგს space - ი

const strtings = ["Hello everyone","Eveyone", "Today" ,"We"]

let filterteDstrings = strtings.map(str => str.toLocaleLowerCase().replace(' ' , ''))

console.log(filterteDstrings)