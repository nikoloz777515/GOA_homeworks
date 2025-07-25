// 3) შექმენით ერთი მასივი შეინახეთ მაში random რიცხვები, თქვენი დავალებაა filter method - ის გამოყენებით მასივიდან გაფილტროთ მხოლოდ ისეთი რიცხვები რომლებიც არის ლუწი

let num = [5,6,2,8,7]

let filtered = num.filter(num =>{
    return num % 2 == 0
});

console.log(filtered)