// 7) შექმენით მასივი, მასში შეინახეთ string - ები, თქვენი დავალებაა რომ reduce method - ის გამოყენებით დააბრუნოთ ამ სიტყვების სომბოლოების რაოდენობა

let strings =['hello','how-are-you','bye-bye']

let stringsSum = strings.reduce((strings,current) => strings + current.length,0 )

console.log(stringsSum)