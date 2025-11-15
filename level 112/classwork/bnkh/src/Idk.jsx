import { useState, useMemo } from "react";


function ExspensiveComponent(){
    const [num,setNum] = useState(1)

    const [text,setText] = useState("")


    const expres = useMemo(() =>{
        console.log("exspensive")
        let result = 0

        for(let i = 0; i < 1000000; i++){
            result += num
        }
        return result;
    }, [num]
)
return(
    <div>
        <p>result: {expres}</p>



           <input
        type="number" onChange={(e) => setNum(num(e.target.value))}  />


         <input
        type="text" placeholder="ეს უბრალოდ ტექსტია" onChange={(e) => setText(e.target.value)}/>
    </div>
)


}

export default ExspensiveComponent;












// 2) გამოიყენეთ  useMemo რომ გააკეთოთ ოპტიმიზაცია (ახსენით კომენტარებით რას აკეთებეს useMemo და რა არის ქეშირება)


// ქეშირება არის შენახვა

//  useMemo არის რეაქთის კაუჭი რომელიც ინახავს შედეგ რომელიც ინახავს  ფუნქციის გამოთვლილი შედეგს ოპტიმიზაციისთვის
// ანუ როცა გვაქვს ისეთი ფუნქცია რომელიც დიდ დროს მოითხოვს
// useMemo თავიდან არ გამოითვლის მას ყოველ დარენდერებაზე არამედ გამოიყენებს უკვე შენახულ cached შედეგეგებს და გამოთვლის მაგის მიხედვით 