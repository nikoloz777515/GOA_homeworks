// 29) შექემნით ერთი მასივი, მასში კი შეინახეთ string - ები, თქვენი დავალებაა რომ დააბრუნოთ მასივიდან ყველაზე დიდი string - ი

const strings = ['hello', 'bye-bye','how-are-you?','okayy' ]

let longestString = strings.reduce((longest,curr)=>{
    return curr.length > longest.length ? curr : longest
})
console.log(longestString)