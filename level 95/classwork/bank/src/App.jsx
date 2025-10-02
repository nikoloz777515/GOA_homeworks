import { useState } from 'react'
import Idk from './Idk'


function App() {
  const [Name,setName] = useState("")

    const handlname = ({target}) =>{
      const {value} = target
      setName(value)
    }


    const [lastname, Setlastname] = useState("")
    const handleLastname = ({target}) =>{
          const {value} = target
          Setlastname(value)
    }
  return (
    <>
      <form>
      <input type="text" onChange={handlname} name='name' placeholder='name' /><br/>

      <input type="text" onChange={handleLastname} name='lastname' placeholder='lastname' />

      <p> name: {Name}</p>

      <p>lastname: {lastname}</p>
     </form>


     <Idk />
    </>
  )
}

export default App








//პლიუსები ისაა რომ აქვს მარტივი და ადვილად გასაგები ლოგიკა ანუ კოდი მარტივად გასაგებია  


//მინუსები ისაა რომ ვწერთ ბევრ კოდს რადგან ყველა ინფუთს უნდა ქონდეს მდგომარეობა და ა.შ


// 1) შექმენით form ორი input_ით, name და lastname იგივე სახელებით შექმენით მდგომარეობები და მოვლენის მმართველი ფუნქციები handleNameChange მაგალითისთის ეს მოვლენის მართველი ეკუთვნის name ინფუთს როგორც კი მოხდება ცვლილება ინფუთში ეგრევე შეცვლაეთ შესაბამისი მდგომარეობა და პარაგრაფის სახით გამოიტანეთ საიტზე, იგივე უნდა გააკეთოთ lastname ინფუთს შემთხვევაშიც (აუცილებლად ახსენით კომენტარებით რა პლიუსები და მინუსები აქვს ამ გზით მუშაობას)


// 2) შექმენით მდგომარეობა სახელად formState, შეინახეთ მასში ცარიელი ობიექტი, როგორც კი მოხდება input ცვლილება ობიექტშ ი ავტომატურად დაამატეთ ახალი კუთვნილება ინფუთის მნიშვნელობით (ახსენით კომენტარებით რატომ არის უკეთესი ეს გზა წინა გზასთან შედარებით)
