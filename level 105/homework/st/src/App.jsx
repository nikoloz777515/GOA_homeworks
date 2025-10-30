import useCounter from "./hooks/useCounter"
import useCheckbox from "./hooks/useCheckbox";

function App() {

  const { count, increase, decrese, reset } = useCounter();

   const { checkboxValue, handleChange } = useCheckbox();


  return (
    <>
     <h1>Counter</h1>

     <p>amount: {count}</p>

     <button onClick={increase}>+1</button>

     <button onClick={decrese}>-1</button>

     <button onClick={reset}>reset</button>


      <h1>
        {checkboxValue
          ? "The checkbox is checked"
          : "The checkbox is unchecked"}
      </h1>

       <input
        type="checkbox"
        checked={checkboxValue}
        onChange={handleChange}
        
      />
    
    </>
  )
}

export default App


// 1) კომენტარების სახით ახსენით თუ რაში გვეხმარება ხელოვნური კაუჭები




// 4) hooks folder - ში შექმენით ფაილი სახელად useToggleText, კაუჭში შექმენით ერთი მდგომარეობა სახელად toggleText საწყის მნიშვნელობად გადაეცით false, შექმენით ერთი ფუნქცია სახელად toggleTextFunc - რომელიც toggleText მდგომარეობის მნიშვნელობას შეცვლის, App.jsx - ში გამოიყენეთ useToggleText ხელოვნური კაუჭი, toggleText - ის მნიშვნელობა იქნება false - ის ტოლი გამოიტანეთ ტექსტი 'The message is hidden', თუ true გამოიტანეთ ტექსტი 'The message is displayed on the screen'