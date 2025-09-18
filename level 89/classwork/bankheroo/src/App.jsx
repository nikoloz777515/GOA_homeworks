import { useState } from 'react'

function App() {
   const values = ["Nika","Luka","Dachi","Basa","Saba"]

  return (
    <main>
      <ul>
       {
        values.map((name,index) =>{
          return <li key={index}>{name}</li>
        })
       }
      </ul>
    </main>
  )
}

export default App


// 1) App კომპონენტში შექმენით მასივი მინიმუმუ 5 სტრინგით (მაგ: თქვენი საუკეთესო მეგობრების სახელებეით), შემდეგ გამოიყენეთ map მეთოდი იმისათვის რომ შექმნათ li თეგები ამ სახელებიტ და დაარეენდერეთ ეკრანზე