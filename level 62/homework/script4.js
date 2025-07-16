// 4) თქვენი დავალებაა while loop - ის გამოყენებით დაითვალოთ თუ რამდენჯერ გვხვდება ასო 'a' ამისთვის:
// შექმენით ერთი ცვალდი სადაც შეინახავთ რაიმე სიტყვას
// შექმენით ერთი ცვალდი სახელად index - ი რომლის თავდაპირველი მნიშვნელობა არის 0 - ის ტოლი
// შექმენით ერთი ცვლადი count ამის მნიშვნელობაც უნდა იყოს 0 - ის ტოლი, ამ ცვლადს თქვენ ქმნით იმისთვის რომ დაითვალოთ თუ რამდენჯერ გვხდება კოკრეტული ასო სიტყვაში

// მინიშნება: ყოველ ჯერზე უნდა დააპლიუსოთ index ცვლადის მნიშვნელობა, საბოლოოდ კი უნდა დაბეჭდოთ თუ რამდენჯერ გვხვდება 'a' ასო სიტყაში



let index = 0
let sentence = 'javaScript'
let count = 0

while(index < sentence.length){
    if(sentence[index] === 'a'){
        count += 1
    }
    index++
}

console.log(`a repeat ${count} times`)








let inde = 0
let sentenc = 'javaScript'
let coun = 0

while(inde < sentenc.length){
    if(sentenc[inde] === 'j'){
        coun += 1
    }
    inde++
}

console.log(`j repeat ${coun} times`)
