import { useState } from "react";

// აქ შევქმენი ფუნქცია სახელად products რომელსაც გამოვიყენებ პროდუქტებისთვის და გარკვეული დავალებების შესასრულებლად 
function Products(){

    //აქ შევქმენი const და მასში შევინახე მდგომარეობა
    const [product, setProduct] =  useState(['roduct 1','product 2'])

    //აქ შევქმენი ისეთი ფუნქცია რომელიც ყოველ ღილაკზე დაკლიკებაზე დაამატებს პროდუქსტს ეკრანზე
    const handleClick = () =>{
        //აქ კონსტანტაშ შევინახე newProduct და სტრინგ ლიტერალის მეშვეობით გავუწერე რომ ყოველ დაჭერაზე გამოეტანა პროდუქტი და მისთის დაემატებინა 1
        const newProduct =`Product ${product.length + 1}`

        
        // აქ setProduct მდგომარეობა გამოვიყენე და გადავეცი spread ოპერატორით product და newProduct ი
          setProduct([...product, newProduct])
    }

    //აქ შევქმენი წაშლის ფუნქცია სახელად delete და გადავეცი პარამეტრდ index რათა მაგის საშუალებით მოხდეს წაშლა
    const Delete = (index) =>{
        // აქ შევქმენი const სახელად filteredProducts და მასშ გამოვიყენე filter მეთოდი  i ინდექსზე მყოფ ელემენტებზე
        const filteredProducts = product.filter((_,i) => i !== index)

        // აქ გამოვიყენე მდგომარეობა და გავუწერე setProduct-ს spread ოპერატორით ის მასივი სადაც ფილტრაცია გავაკეთეთ
        setProduct([...filteredProducts])
    }

    return(
        <div>
            <ul>
            {/* აქ გამოვიყენე ფიგურული ფრჩხილები რათა უკვე კოდი ვწერო ჯავასკრიპტში */}
                {
                    product.map((item,index)=>{
                        return(
                        <li onClick= { () => Delete(index)}key={item}>{item}</li>
                    )
                    })
                }
            </ul>

            <button onClick={handleClick}> Add product</button>
        </div>
    )
}




// აქ კი დავაექსპორტე Products კომპონენტი
export default Products




