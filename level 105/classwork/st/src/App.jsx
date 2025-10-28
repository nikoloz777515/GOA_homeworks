import useForm from './hooks/useForm'

import useTogle from './hooks/useTogle'

function App() {
  const {data,handleChange} = useForm()

  const {toggle,switchh} = useTogle()

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
       <input type="text" name="username" onChange={handleChange} placeholder="username" />
        <input type="email" name="email" onChange={handleChange} placeholder="email" />
        <input type="password" name="password" onChange={handleChange} placeholder="password" />
        <button type="submit">Submit</button>
      </form>


      <button
      onClick={switchh}
      style={{
        backgroundColor: toggle ? "black" : "red",
        color: "white",
      }}
    >
      {toggle ? "ON" : "OFF"}
    </button>
    </>
  )
}

export default App


// 1) შექმენიტ კაუჭი hooks ფოლდერში, ფაილის სახელი useForm, ეს კაუჭი უნდა გვეხმ,არებოდეს ფორმების სამართავად, სადაც ნებისმიერი რაოდენობის ინფუთები შეიძლება იყოს გამოყენებული, ამ კაუჭში შექმენიტ მდგომარეობა სახელად data რომელიც შეინახავს თავიდან ცარიელ ოპბიექტს, აგრეთვე შექმენით ფუნქცია სახელად handleChange რომელსაც გამოიყენებთ ინფუთებში ცვლილების დასაფიქსირებლად, როდესაც ცვლილება მოხდება ინფუთში, იფუთის სახელით შექმენით კუთვნილება და მიანიჭეთ მნიშვნელობა