import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const values = ["Nika","Luka","Dachi","Basa","Saba"]

  return (
    <main>
      <ul>
        values.map((value) => {
          return <li>{value}</li>
        })
      </ul>
    </main>
  )
}

export default App


// 1) App კომპონენტში შექმენით მასივი მინიმუმუ 5 სტრინგით (მაგ: თქვენი საუკეთესო მეგობრების სახელებეით), შემდეგ გამოიყენეთ map მეთოდი იმისათვის რომ შექმნათ li თეგები ამ სახელებიტ და დაარეენდერეთ ეკრანზე