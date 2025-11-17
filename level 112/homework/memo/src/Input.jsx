import { useMemo,useState } from "react";


function Inp(){
    const [number,setNumber] = useState("")

    return(
        <>
        <form>

            <input type="text" placeholder="please enter a number" onChange={dsds} />
            <button>submit</button>
        </form>
        
        
        </>
    )
}

export default Inp;




// 2)  მომხმარებელს input - ით შემოატანინეთ რაიმე რიცხვი, თქვენი დავალებაა, რომ გამოთვალოთ მოცემული რიცხვის factorial, გამოიყენეთ useMemo კაუჭი ოპტიმიზაციისთვის, ფუნქცია რომელიც ითვლის მომხმარბელის მიერ შემოტანილი რიცხვის factorial - ს უნდა გაეშვას მხოლოდ მაშინ როდესაც რიცხვი შეიცვლება, საიტზე უნდა გქონდეთ ორი input - ი, პირველი იქნება ის input - ი რომელშიც მომხმარებელი შემოიტანს რაიმე რიცხვს, მეორე იქნება ტექსტისთვის, დააკვირდით მუშაობას, კოდი დეტალურად ახსენით კომენტარების სახით