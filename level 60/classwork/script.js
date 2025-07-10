// 1) გამოიყენეთ 3 მეთოდი ელემენტის/ელემენტების წამოსაღებად gelElementById, getElementsByClassName და getElementsByTagName ახსენით კომენტარებით რა განსხვავებაა მათ შორის და ახსენიტ სხვადასხვა სიტუაციაში რა მნიშვნელობებს დააბრუნებს

// getElementById წამოღებული ელემენტის შიგნით ჩასვით ახალი 3 ელემენტი innerHTML გამოიყენებიოთ, აგრეთვე ახსენით რა განსხვავებაა innerHTMl სა და textContent შორის


let Hello = document.getElementById("hello")
        console.log(Hello)

let name = document.getElementsByClassName('name')
    console.log(name)

let Bye = document.getElementsByTagName("h2")
        console.log(Bye)

Hello.innerHTML += `
  <b>Hello</b>
  <h1>Bye</h1>
  <p>Nika</p>
`


// innerHtml 	HTML კოდის თეგებს აღიქვამს

// textContent   უბრალოდ აღიქვამს ტექსტს თეგებს როგორც ტექსტს

      