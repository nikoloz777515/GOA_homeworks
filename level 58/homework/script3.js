// <!-- 3) შექმენით ერთი ცვლადი სახელად score მიანიჭეთ მას ნებისმიერი მნიშვნელობა 0 - 100 - ის ჩათვლით, შეამოწმეთ იმ შემთხვევაში თუ score ცვლადის მნიშვნელობა ნაკლებია 0 - ზე ან მეტია 100 - ზე გამოიტანეთ "Invalid Score" - ი, იმ შემთხვევაში თუ score ცვლადის მნიშვნელობა == 100, მაშინ გამოიტანეთ "A+" - ი, იმ შემთხვევაში თუ score ცვლადის მნიშვნელობა უდრის 90 - ს ან მეტია მასზე გამოიტანეთ "A" - ი, იმ შემთხვევაში თუ score ცვლადის მნიშვნელობა არის 80 - ი ან მეტია მასზე გამოიტანეთ B" - ი, 70 - ის ან მასზე მეტი ქულის შემთხვევაში "C", თუ score - ი 60 - ია ან მეტი "D", თუ 40 - ია ან მეტი "E" სხვა შემთხვევაში კი "F" 


 let score = 99
 if (score < 0 || score > 100){
    window.alert( "Invalid Score")
 }
 else if(score === 100){
    window.alert("A+")
 }
 else if(score >= 90){
    window.alert("A")
 }
 else if(score >= 80){
    window.alert("B")
 }
 else if( score >= 70){
    window.alert("C")
 }
 else if( score >= 60){
    window.alert("D")
 }
 else if( score >= 40){
    window.alert("E")
 }
 else{
    window.alert("F")
 }