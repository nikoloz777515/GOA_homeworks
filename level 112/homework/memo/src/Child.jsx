import { memo } from "react";

const Child = memo(({handleClick}) =>{
    console.log("Child rendered")
    return(
        <div>
            <h1>Child</h1>
            <button onClick={handleClick}>Increase</button>
        </div>
    )

})

export default Child


// 3) შექმენით ორი კომპონენტი,  1.Parent, 2.Child, Parent კომპონენტში უნდა გქონდეთ count მდგომარეობა და input - ი ტექსტისთვის, უნდა გქონდეთ handleClick ფუნქცია რომელიც count მდოგმარეობას შეცვლის, გამოიძახეთ Child კომპონენტი და props - ად გადაეცით თქვენს მიერ შექმნილი handleClick ფუნქცია, დააკვირდით მუშაობას, Child კომპონენტმა რომ არ გამოიწვიოს ყოველ ჯერზე ხელახლა დარენდერება გამოიყენეთ useCallBack, memo, კოდი დეტალურად ახსენით კომენტარების სახით