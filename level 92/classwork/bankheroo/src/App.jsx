import { useState } from 'react'
import Parent from './Parent'


function App() {
  
  return (
    <main>
      <Parent />
    </main>
  )
}

export default App

// 1) კომენტარების სახით ახსენით თუ რა არის props drilling - ისაუბრეთ თუ რატომ არის props drilling - ი პრობლემატური, ასევე მოიძიეთ ინფორმაცია იმასთან დაკავშირებით თუ როგორ შეგვიძლია ამ პრობლემის გადაჭრა

// props driling არის ინფორმაციის ანუ props ის მიწოდება შვილობილიდან მშობელ კომპონენტამდე   უნდა გადავცეთ ის Parent  Child Grandchild ი

// პრობლემატური იმიტომაა რომ გვიწევს ბევრნაირი კოდის წერა და ეს იწვევს კოდის გადატვირთვას და რთულიცაა დებაგინგი მაგ კოდებში 


// 2) გააკეთეთ porps drilling - ზე მაგალითი