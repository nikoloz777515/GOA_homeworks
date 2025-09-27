import { useState } from 'react'

function App() {
  let [click,count] = useState(0)

  const handleclick = () =>{

      count(click+1)
      console.log(click)
  }

  return (
    <>
    <p>the click amount is {click}</p>
     <button onClick={handleclick}>Click to +</button>
    </>
  )
}

export default App




// 1) მოიძიეთ ინფორმაცია useState შესახებ, App კომპონენტში გამოიყენეთ ეს კაუჭი, შექმენით click მდგომარეობა, რომლის საწყისი მნიშვნელობა იქნება 0, როდესაც ღილეკაზე მოხდება დაწკაბება შეცვლაეთ მდგომარეობა (ანუ ერთით დააპლიუსეთ)