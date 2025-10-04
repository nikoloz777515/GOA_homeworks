import { useState,useEffect  } from 'react'
import Count from './Count';

function App() {
  const [color,setcolor] = useState('white')

    useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
     <button onClick={() =>setcolor("Green")}>Green</button>

     <button onClick={() => setcolor("Blue")}>Blue</button>

     <button onClick={() => setcolor("Pink")}>Pink</button>

     <button onClick={() => setcolor("Red")}>Red</button>

     <Count />
    </>
  )
}

export default App


// 1) თქვენი სიტყვებით ახსენით თუ რა არის cleanup function - როდის ვიყენებთ ჩვენს მას, ასევე მოიყვანეთ რამოდენიმე მაგალითიც

// 2) შექმენით ერთი მდგომარეობა სახელად color საწყის მნიშვნელობად გადაეცით 'white' - შექმენით რამოდენიმე ღილაკი განსხვავებული ტექსტით მაგალითად Green, Blue, Pink, red და ასე შემდეგ, ღილაკზე დაჭერისას ასევე უნდა შეცვლოთ მდგომარეობის მნიშვნელობაც, შეცვალეთ მთლიანი ეკრანის უკანა ფერი ყოველ ჯერზე როდესაც color მდგომარეობა შეიცვლება
