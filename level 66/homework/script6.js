// 6) შექმენით რიცხვების მასივი, თქვენი დავალებაა რომ დააბრუნოთ true Boolean მნიშვნელობა იმ შემთხვევაში თუ რიცხვი არის ლუწი სხვა შემთხვევაში კი false, ეს გააკეთეთ map მეთოდის გამოყენებით

let nums = [2,3,5,7,4,12,9,11,22]

let evenOrodd = nums.map(num =>{
    if(num % 2 === 0){
        return true
    }else{
        return false
    }
}

)
console.log(evenOrodd)