// 4) შექმენით მასივი რომლებიც შედგება რამოდენიმე ხილისგან, თქვნი დავალებაა რომ გამოიტანოთ მხოლოდ ისეთი ხილის სახელები რომლის პირველი ასო არის “a”, ეს გააკეთეთ filter მეთოდის გამოყენებით


let fruits =['cocuntat','apple','Avocado','Ananas']

let filtered = fruits.filter(fruits =>{
    return fruits[0].toLocaleLowerCase() === "a"
})

console.log(filtered)