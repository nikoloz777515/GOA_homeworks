// 17) შექმენით ერთი მასივი, მასში კი შექმენით რამოდენიმე ობიექტი, some method - ის გამოყენებით შეამოწმეთ არის თუ არა ისეთი ობიექტი რომლის მნიშვნელობაც არ არის განსაზღვრული

const users = [
    { name: 'niko', status: 'active' },
    { name: 'luka', status: 'active' },
    { name: 'ana', status:  'active' },
    { name: 'goga', status: 'active' },
    { name: 'nino', status: 'active' },
    { name: 'gio', status: undefined } 
]

let usersSome = users.some(usr => usr.status === undefined )
console.log(usersSome)