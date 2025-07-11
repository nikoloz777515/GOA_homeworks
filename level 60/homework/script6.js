// 6) შექმენით: 
// ორი პარაგრაფი
// ორი ღილაკი -- Change Text Content, Add innerHTML
// მოიპოვეთ მათზე წვდომა, როდესაც მომხმარებელი დააკლიკებს პირველ ღილაკს ხელს უნდა მოხდეს text - ის შიგთავსის შეცვლა, ხოლო როდესაც მომხმარებელი დააკლიკებს მეორე ღილაკს ხელს innerHTML - ის გამოყენებით უნდა ჩაამატოთ მეორე ელემენტში დამატებით ელემენტი <p><b>Value</b></p>, <p><strong></strong></p>, <p><i>Italic</i></</p> და ასე შემდეგ, კომენტარების სახით ახსენით თუ რა განსხვავებაა:
// div.innerHTML = `<p></p>`, div.innerHTML += `<p></p>` შორის 


let firstP = document.getElementById("p1")

let secP = document.getElementById("p2")

let firstBT = document.getElementById("btn1")
firstBT.addEventListener('click',() =>{
    firstP.textContent="BLA BLA"
})



let sectBT = document.getElementById("btn2")

sectBT.addEventListener('click',() => {
    secP.innerHTML =
    '<p><b>Value</b></p> <p><strong>Strong</strong></p> <p><i>Italic</i></p>';
});


// კომენტარების სახით ახსენით თუ რა განსხვავებაა:
//  div.innerHTML = `<p></p>`, div.innerHTML += `<p></p>` შორის 

// განსხვავება ისაა რომ  div.innerHTML = `<p></p>`, div ასე შეიცვლება ტექსტი მაგრამ ბევრჯერაც რომ დავაჭიროთ აზრი არექნება მარტო ერთხელ შეიცვლება

// innerHTML += `<p></p> და ამის გამოყენებისას მაგალითდ რამდენჯერაც ღილაკზე დავაჭერთ ხელს დაემატება ზემოდან და გახდება ხილვადი ჩვენთვის ეგ პარაგრაფი





    
