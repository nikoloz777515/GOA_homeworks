//  9) შექმენით ორი ღილაკი heads tails ორივეს მიანიჭეთ უნკიალური ID შექმენით ერთი პარაგრაფი და მასაც მიანიჭეთ უნკიალური ID, მოიპოვეთ წვდომა ორივე ღილაკზე, იმ შემთხვევაში თუ მომხმარებელმა დააჭირა ხელი heads ღილაკს მაშინ paragraph element - ის ტექსტის შიგთავსი შეცვალეთ და გახადეთ heads - ი, თუ მომხმარებელმა დააჭირა ხელი tails ღილაკს მაშინ paragraph element - ის ტექტსი შიგთავსი შეცვალეთ და გახადეთ tails - ის ტოლი, მინიშნება გამოიყენეთ document.getElementById, addEventListener, მოუსმინეთ 'click' მოვლენას 

let paragraph = document.getElementById("pgh")


let button = document.getElementById("btn1")
    button.addEventListener("click",() =>{
        paragraph.textContent = "heads"
    })


let button2 = document.getElementById("btn2")
     button2.addEventListener("click",() =>{
        paragraph.textContent = "tails"
    })

