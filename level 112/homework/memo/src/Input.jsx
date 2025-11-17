import { useMemo,useState } from "react";


function Inp(){
    const [number,setNumber] = useState(1)
    const [text,setText] = useState("")
    

    console.log(number)

    const getFactorial = useMemo(() =>{
        let res = 1

        for(let i = 1; i <= number; i++){
            res *= i
        }
        return res

        
    },[number])

    return(
        <>
            <h1>Factorial Calculator</h1>

        <input type="number" value={number} onChange={(e) =>setNumber(Number(e.target.value))} />
                <p>Factorial: {getFactorial}</p>

        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <p>text: {text}</p>
        
        
        
        </>
    )
}

export default Inp;




// 2)  მომხმარებელს input - ით შემოატანინეთ რაიმე რიცხვი, თქვენი დავალებაა, რომ გამოთვალოთ მოცემული რიცხვის factorial, გამოიყენეთ useMemo კაუჭი ოპტიმიზაციისთვის, ფუნქცია რომელიც ითვლის მომხმარბელის მიერ შემოტანილი რიცხვის factorial - ს უნდა გაეშვას მხოლოდ მაშინ როდესაც რიცხვი შეიცვლება, საიტზე უნდა გქონდეთ ორი input - ი, პირველი იქნება ის input - ი რომელშიც მომხმარებელი შემოიტანს რაიმე რიცხვს, მეორე იქნება ტექსტისთვის, დააკვირდით მუშაობას, კოდი დეტალურად ახსენით კომენტარების სახით