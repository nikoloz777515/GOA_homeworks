import { useState } from 'react'


function App() {
  let age = 18
 return(
  <div>
   {age === 18 ? `you are ${age} year old` : "you aren't 18"} <br />

   {age <= 18 ? "you are child" : "you are adult"}  <br />

   {age > 15 && age < 18 ? "you are teenager" : "you are child"} <br />

   {age === 17 || age === 22 ? "you are good age" : `now you are ${age} years old`} <br />

   {age < 15 && <h1>you are child</h1> } <br />

   {age >= 16 && <h1>you can get driver license</h1> }




  </div>
 )
  
}

export default App


// 1) გააკეთეთ რამოდენიმე მაგალითი ternary, && operator - ის გამოყენებით React - ში, ასევე კომენტარების სახით ახსენით მათ შორის განსხვავება, ახსენით თუ რატომ არ შეგვიძლია ჩვეულებრივი if statement - ის გამოყენება JSX - ის tag - ებში

// იმიტომ არშეგვიძლია რომ if else ბლოკი არაბრუნებს მნიშვნელობას და როცა ჩენ ვიყენებთ tenary operator ებს ეგენი აბეუნებენ მნიშვნელობებს და აი მაგიტომ არშეგვიძლია გამოყენება და კოდი აუცილებლად {} ფრჩხილებში უნდა ჩაწეროს რათა უკვე ჯავასკრიპტშ ვწეროთ და არა რეაქტშ ანუ {} ამ ფრჩხილებით ჩვენ გავურბივართ jsx და გადავდივართ javascript ში


// 3) ბევრი ივარჯიშეთ ternary და && operator - ებზე, მოცემული დავალებების გარდა, თქვენითაც გააკეთეთ ამის შესახებ მაგალითები რადგან უფრო უკეთესად გაიაზროთ