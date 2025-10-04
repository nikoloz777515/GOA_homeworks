import { useState,useEffect } from "react";


function Count() {
    const [count,setCount] = useState(0)

    const increase = () =>{
        setCount(count +1)
    }

    useEffect(()=>{
        if(count === 7){
            alert("Lucky number")
        }
        else if(count > 7){
            setCount(count -7)
        }
    },[count])

    return(
        <div>
            <p>you clicked: {count} times</p>
            <button onClick={increase}>Click to increase</button>

        </div>
    )
}

export default Count
// 3) შექმენით ერთი მდგომარეობა count, ღილაკზე დაჭერისას გაზარდეთ count - მდგომარეობა 1 - ით, როდესაც count მდგომარეობა გაუტოლდება 7 - ს alert - ის დახმარებით გამოიტანეთ 'Lucky number' ეს უნდა გააკეთოთ useEffect - კაუჭის გამოყენებით