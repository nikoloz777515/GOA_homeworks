import { useState } from "react";


function useCheckbox(){
 const [checkboxValue, setCheckboxvalue] = useState(false)

 const handlechange = () =>{
    setCheckboxvalue(!checkboxValue)
 }

 return {checkboxValue,handlechange}
}

export default useCheckbox





// 3) hooks folder - ში შექმენით ერთი ფაილი სახელად useCheckbox, თქვენს კაუჭში შექმენით ერთი მდომარეობა სახელად checkboxValue, რომლის საწყისი მნიშვნელობა იქნება false - ის ტოლი, შექმენით ერთი ფუნქცია სახელად handleChange - რომელიც checkboxValue - ს გახდის true, სხვა შემთხვევაში კი ისევ false, გამოიყენეთ მოცემული კაუჭი App.jsx - ის ფაილში, შედეგი გამოიტანეთ ეკრანზე შემდეგდაირად ---> The checkbox is checked თუ checkboxValue - ს მნიშვნელობა არის true - ს ტოლი სხვა შემთხვევაში კი 'The checkbox is unchecked'