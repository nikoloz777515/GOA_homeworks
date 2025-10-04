import { useEffect, useState } from 'react'


function App() {
  const [name,setName] = useState("")
      
  useEffect(() =>{
    alert(`hello ${name}`)
  },[name])

  return (
    <>
      <div>
      <h1>Enter your name:</h1>
     
      <input
        type="text" onChange={(ev) => setName(ev.target.value)} placeholder="please enter your name"
      />
    </div>
    </>
  )
}

export default App


// 1) კომენტარების სახით ახსენით თუ რა არის useEffect - რაში ვიყენებთ ჩვენ მას

// useEffect არის Hook/კაუჭი და მას ჩვენ ვიყენებთ ისეთი რაღაცეების სამართავად რაც რენდერის გარეთ ხდება მაგალითდ სერვერიდან ინფორმაციის წამოღება ანუ fetch ი 





// 2) შექმენით name მდგომარეობა საწყის მნიშვნელობას გადაეცით '', შექმენით ერთი input - ი სადაც მომხმარებელს შემოატანინებთ მის სახელს მოცემული სახელი შეინახეთ name მდგომარეობაში, თქვენი დავალებაა რომ alert - გამოიტანოთ მნიშვნელობა Hello ${name} ყოველ ჯერზე როდესაც name მდგომარეობა შეიცვლება