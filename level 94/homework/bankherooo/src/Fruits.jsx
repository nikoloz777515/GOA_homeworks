import { useState } from "react";



function Fruits(){
    const [fruits,Setfruits] = useState(["Apple","Pineaple","Banana"])

    const Add = () =>{
            Setfruits(([... fruits , "orange"]))
    }

    const Clear = () =>{
        Setfruits([])
    }

    return(
        <div>
            <h1>fruits</h1>
            <ul>

                {
                    fruits.map((fruit,index) =>
                        <li key={index}> {fruit} </li>
                    ) 
                    
                    
                }
          
        
            </ul>

            <button onClick={Add}>Add fruit</button>

            <button onClick={Clear}>Clear all</button>
        </div>
    )
}

export default Fruits;




// 3) შექმენით ერთი მდგომარეობა შეინახეთ მასში ხილისგან შემდგარი მასივი, ღილაკზე დაჭერისას უნდა მოხდეს orange ხილის დამატება, უნდა გქონდეთ მეორე ღილაკი რომელიც ამ მასივს მთლიანად გაასუფთავებს, გამოიტანეთ შედეგი ეკრანზე