import { useState,createContext, } from "react"

export const AuthContext = createContext();

function AuthProvider ({children}){
    const [user,setUser] = useState(null)
    const [reguser,setReguser] = useState(null)


const signUp = (data) =>{
    setReguser(data)
    alert("you sucesfully registered")

}


const login = (data) =>{
    if(reguser && data.email === reguser.email && data.password === reguser.password){
        setUser(reguser)
        alert("welcome")
    }else{
        alert("something is wrong")
    }
    
}



const logout = () =>{
    setUser(null)
}
return(
    <AuthContext.Provider value={{user,signUp,login,logout}} >
        {children}
    </AuthContext.Provider>
)


}

export default  AuthProvider

// 1) შექმენით AuthContext - სადაც გექნებათ სამი ფუნქცია signUp, login, logout, უნდა გქონდეთ ერთი მდგომარეობა სახელად user რომლის საწყისი მნიშვნელობა თავიდან არის null, როდესაც მომხმარებელი გაივლის რეგისტრაციას შეინახეთ დარეგისტრირებული მომხმარებლის მონაცემები მონაცემთა ბაზაში,  როდესაც მომხმარებელი გაივლის აუტორიზაციას ანუ თუ მის მიერ შემოტანილი მონაცემები უდრის რეგისტრაციაში შემოტანილ მონაცემებს მაშინ მოცემული ფორმები საიტიდან გააქრეთ და გამოიტანეთ profile - ის გვერდი მომხმარებლის ინფორმაციით, როდესაც მომხმარებელი შევა თავის account - ზე უნდა გამოჩნდეს ერთი ღილაკი სახელად logout - რომელზე დაკლიკებისას მომხმარებელი უნდა დაუბრუნდეს signUp login გვერდს, AuthContext - ი გამოიყენეთ შესაბამის კომპონენტებში, გამოიყენეთ children - იმისათვის რომ ყველა კომპონენტს შეეძლოს მოცემულ ფუნქციებზე წვდომის მოპოვება, AuthContext.Privider - ში უნდა ჩასვათ children