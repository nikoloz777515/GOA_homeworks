// 2) შექმენით ფუნქციის გამოსახულება (შეინახეთ ფუნბქცია const ში) რომელსაც გადაეცემა წინადადება (სტრინგი) თქვენი დავალებაა ამ სტრინგში დაითვალოთ სფეისების რაოდენოპბა for ციკლით



let sentence = 'hello everyone bye bye'

let cnt = 0

const count = function counter () {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            cnt++
        }
    }
}

count()

console.log(cnt)