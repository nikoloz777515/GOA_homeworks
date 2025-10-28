import { useState } from "react";

function useTogle(initVal = false){
 const [toggle, setTogle] = useState(initVal)



 const switchh = () => {
    setTogle(prev => !prev);
 }

 return {toggle, switchh}
}

export default useTogle







// 2) შექმენით useToggle კაუჭი, სადაც გექნებათ მხოლოდ ერთი მდგომარეობა სახელად toggle, თავიდან მისი მნიშვნელობა იქნება false, აგრეთვე შექმნით ფუნქცია სახელად switch რომელიც მდგომარეობას შეცვლის, თუ false iნახება ამჟამად ჩასვით true თუ true ინახება ჩასვით false, შემდეგ გადაით app.js შექმენით ღილაკი, როდესაც toggle იქნება  true ღილაკის ფერი უნდა გახდეს შავი როდესაც false ღილაკის ფერი უნდა გახდეს წითელი