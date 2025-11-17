import { useMemo } from "react";
import { useState } from "react";

const calculateFibonacci = (num) =>{
      if(num < 0) return 0;
      if (num === 0) return 0;
      if (num === 1) return 1;

     return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
} 

  const FibonacciCalculator = () =>{
        const [number,setNumber] = useState(0)
        const [text,setText] = useState("")

        const fiboValue = useMemo(() => {
    return calculateFibonacci(number);
}, [number]);

        

        return(
            <div>
                <h1>Fibonacci</h1>

                <input type="text" placeholder="enter something" onChange={(e) => setText(e.target.value)} />
                <p>text: {text}</p>

                  <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <p>Fibonacci: {fiboValue}</p>
            </div>
        )
     }


export default FibonacciCalculator;





// 2) შექმენით calculateFibonacci ფუნქცია (შეგიძლიათ მოიძიოთ დამატებითი ინფორმაციაც), თქვენი დავალებაა, რომ მომხმარებელს შემოატანინოთ რაიმე რიცხვი და გაიგოთ მისი Fibonacci, ოპტიმიზაციისთვის გამოიყენეთ useMemo კაუჭი, ამასთან ერთად უნდა გქონდეთ ერთი input ველი საიდანაც მოხდება ტექსტის შემოტანა, input - ველში რაიმე ტექსტის შეტანამ არ უნდა გამოიწვიოს რიცხვის Fibonacci - ის ხელახლა გამოთვლა