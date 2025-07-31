// 16) some მეთოდის გამოყენებით შეამოწმეთ არის თუა არა რომელიმე მომხმარებელი რომლის ასაკიც მეტია 18 ზე
const users = [
    {
        name:'niko',age:21
    },
    {
        name:'dato',age:61
    },
    {
        name:'goga',age:18
    },
    {
        name:'ana',age:17
    },
    {
        name:'luka',age:11
    },
    {
        name:'nino',age:17
    },
    {
        name:'mari',age:24
    },
]

let Someusers = users.some(usr => usr.age > 18)
console.log(Someusers)