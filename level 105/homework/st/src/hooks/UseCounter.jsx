import { useState } from "react"

function useCounter(){
    const [count, setCount] = useState(0)

    const increase = () => setCount(count +1)

    const decrese = () => setCount(count -1)

    const reset= () => setCount(0)

    return {count,increase,decrese,reset}
}




export default useCounter







// 2) hooks folder - ში შექმენით ერთი ფაილი სახელად useCounter, კაუჭში შექმენით ერთი მდგომარეობა სახელად count რომლის საწყისი მნიშვნელობა თავიდან იქნება 0, შექმენით ერთი ფუნქცია რომელიც ამ მდგომარეობის მნიშვნელობას გაზრდის ერთით, შექმენით მეორე ფუნქცია რომელიც ამ მდგომარეობის მნიშვენლობას შეამცირებს ერთით, შექმენით მესამე ფუნქცია რომელიც ამ მდგომარეობის მნიშვნელობას დააბრუნებს ისევ 0 - ზე, App.jsx - ში კი გამოიყენეთ მოცემული useCounter კაუჭი