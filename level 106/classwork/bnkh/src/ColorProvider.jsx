import React, { createContext, useState } from "react";


export const ColorContext = createContext();

const ColorProvider =({children}) =>{

 const[color,setColor] = useState("#ffffff")

 const randomColor = () =>{
    const leters = "0123456789ABCDEF"
    let hex = "#"
    for(let i = 0; i<6; i++){
        hex += leters[Math.floor(Math.random()* 16)]
    }
    return hex
 }
   const handleClick = () => {
    const newColor = randomColor();
    setColor(newColor);
  };
    const value = { color, handleClick };

     return (
    <ColorContext.Provider value={value}>
      {children} 
    </ColorContext.Provider>
  );
}

 





// 2) შექმენით ColorProvider კომპონენტი, რომელიდანაც დააბრუნებთ ColorContext.Provider ში ჩასმულ შვილ ელემენტებს, შემდეგ მაგ კომპონეტში შექმენით randomColor ფუნქცია რომელიც შემთხვევით ფერს აწარმოებს hex ფორმატში და აგრეთვე color მდგომარეობა თავისი handleClick ფუნქციით რომელიც უნდა იძახებდეს randomColor ფუნქციას და დაბრუნებულ შედეგს უნდა ანიჭებდეს მდგომარეობას, საბოლოოდ გადაეცით ეს handleClick ფუნქცია და color მდგჰომარეობა ობიექტს და ობიექტი გადაეცით value ატრიბუტს, შემდეგ გამოიძახეთ ის App კომპონენტში და გადაეცით Child კომპონენტი, child კომპონენტი კი უნდა აბრუნებდეს Div ბლოკს როპმლის ფერიც იქნება შემთხვევით მიღებული ფერი ფუნქციიდან, აგრეთვე დაამატეთ ღილაკი, ღილაკზე დაკლიკებისას კი ეს ფერი უნდა იცვლებოდეს
