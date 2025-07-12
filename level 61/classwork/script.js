// 1) შექმენით ღილაკი, რომლის დაკლკიკების შემთხვევაში რიგრიგობით გამოჩნდება 2 prompt ორივეში მომხმარებელმა უნდა შეიტანოს რიცხვები, პირველრიოგში შეკრიბეთ ეს რიცხვები და შეინახეთ ცვლადში, შემდეგ შეამოწმეთ ორივე რიცხვი ლუწია თუ კენტი, საბოლოოდ ყოველ გაშვებაზე უნდა გამოცნდეს მხოლოდ 3 პარაგრაფი, პირველი რიცვხების ჯამი და დანარჩენი ორ პარაგრაფში იქნება ჩასმული შემოტანილი რიცხვი დეფისი და ლუწია/კენტია

// მაგ

// 5 10

// sum = 15
// 5 - odd
// 10 - even

document.getElementById('firstP').addEventListener("click", () => {
  const num1 = parseInt(prompt("enter first number:"))
  const num2 = parseInt(prompt("enter socond number:"))


  const sum = num1 + num2;

  function checkNumber(cheeck) {
    return cheeck % 2 === 0 ? "even" : "odd"
  }

  const answer = document.getElementById("answer")
  output.innerHTML = `
    <p>Sum: ${sum}</p>
    <p>${num1} - ${checkNumber(num1)}</p>
    <p>${num2} - ${checkNumber(num2)}</p>
  `
})



   



 