// 5) შექმენით ერთი მასივი სადაც გექნებათ string - ები, თქვენი დავალებაა რომ გამოიტანოთ მხოლოდ ისეთი string - ები რომლის სიმბოლოების რაოდენობაც უდრის 3 - ს, filter მეთოდის გამოყენებით


const strings = ["bla","oke","hello","bye","goodbye","okay"]

let filTeredstrings = strings.filter(str =>{
    return str.length === 3
})

console.log(filTeredstrings)