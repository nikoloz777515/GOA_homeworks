import { useCallback, useState } from "react";
import Child from "./Child";

function Parent(){
    const [count,setCount] = useState(0)
    const [text, setText] = useState("");

    const handleclick = useCallback(() =>{
        setCount(count +1)
    },[count])

    return(
        <div>
          

                <input type="text"   onChange={(e) => setText(e.target.value)}/>
                
            
            <p>{count}</p>

            <p>{text}</p>


            <Child handleClick = {handleclick} />
        </div>
    )
}


export default Parent;


// 3) შექმენით ორი კომპონენტი,  1.Parent, 2.Child, Parent კომპონენტში უნდა გქონდეთ count მდგომარეობა და input - ი ტექსტისთვის, უნდა გქონდეთ handleClick ფუნქცია რომელიც count მდოგმარეობას შეცვლის, გამოიძახეთ Child კომპონენტი და props - ად გადაეცით თქვენს მიერ შექმნილი handleClick ფუნქცია, დააკვირდით მუშაობას, Child კომპონენტმა რომ არ გამოიწვიოს ყოველ ჯერზე ხელახლა დარენდერება გამოიყენეთ useCallBack, memo, კოდი დეტალურად ახსენით კომენტარების სახით