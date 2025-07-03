// 1) თუ ადამიანმა აირჩია მერსედესი მაშინ დავუწეროთ რომ კარგი არჩევანია, იმ შემთხვევაში თუ მომხმარბელემა აირჩია ტესლა მაშინ დავუწეროთ რომ ცუდი არჩევანია, თუ მომხმარებელმა აირჩია ოპელი მაშინ დაუწერეთ რომ საშუალო არჩევანია სხვა შემთხვევაში კი
// ვერ გეტყვი 'i can't tell'

// let input = prompt('enter a car')

// let merc = 'Mercedes'

// let tesla = 'Tesla'

// let opel = 'Opel'

// if(input == merc){
//     window.alert("Good choice")
// }

// else if(input == tesla){
//     window.alert('Bad choice')
// }

// else if(input == opel){
//     window.alert('Normal Choice')
// }

// else{
//     window.alert('i cant tell')
// }


// 2) შექმენით ერთი ცვლადი სადაც შეინახავთ თქვენს საყვარელ ფილმს, შექმენით ერთი მასივი სადაც გექნებათ ფილმების ჩამონათვალი იმ შემთხვევაში თუ თქვენს მიერ შექმნილი ცვლადის მნიშვნელობა არის მასივში გამოიტანეთ რომ  It is a good film იმ შემთხვევაში თუ მომხმარებელის მიერ შემოტანილი ცვლადის მნიშვნელობა არ არის მასივში გამოიტანეთ რომ 'The Film is not good'


let input = prompt('Enter a film')

let films = ["hitman", "spider-man", "fury", "tokyo drift"]

if (films.includes(input)) {
    window.alert('It is a good film')
} else {
    window.alert('The Film is not good')
}