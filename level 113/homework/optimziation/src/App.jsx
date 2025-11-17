import { useState } from 'react'
import FibonacciCalculator from './calculateFibonacci'


function App() {
 

  return (
    <>
     <FibonacciCalculator />
    </>
  )
}

export default App


// 1) კარგად გაიაზრეთ useMemo, useCallback კაუჭების მუშაობა, ასევე კარგად გაიაზრეთ memo ფუნქცია 



// 3) აგრეთვე დამატებით გამოიყენეთ memo ფუნქცია, და useCallback - კაუჭი, ისეთ კომპონენტებში რომელშიც თვლით, რომ გჭირდებათ