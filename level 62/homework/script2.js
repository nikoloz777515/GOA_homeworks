// შექმენით ერთი ცვლადი მასში შეინახეთ რიცხვი, თქვენი დავალებაა do - ში დაბეჭდოთ კონკრეტული რიცხვი მაგალითად 'The Number is' + number, თქვენს მიერ შექმნილი ცვლადის მნიშვნელობა უნდა იყოს 5 ზე მეტი, ყოველ ჯერზე ამ ცვლადს უნდა გამოაკლოთ ერთი გამოიყენეთ shortcut - ი '--', ეს ყველაფერი უნდა მოხდეს იქამდე სანამ number ცვლადის მნიშვნელობა მეტია 0 ზე

let number = [15]

do{
    console.log('The number is ' + number)
    
    number--
}while(number >= 0);


