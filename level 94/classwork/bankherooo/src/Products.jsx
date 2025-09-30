import { useState } from "react";


function Products(){
    const [product, setProduct] =  useState(['roduct 1','product 2'])

    const handleClick = () =>{
        const newProduct =`Product ${product.length + 1}`

       
          setProduct([...product, newProduct])
    }

    return(
        <div>
            <ul>
                {
                    product.map(item =>{
                        return(
                        <li key={item}>{item}</li>
                    )
                    })
                }
            </ul>

            <button onClick={handleClick}> Add product</button>
        </div>
    )
}



export default Products








// 2) შექმენით ფაილი სახელად Products.jsx, მასში შექმენით კომპონენტი Products, შექმენით მდგომარეობა რომელიც ინახავს მასივს ორი პროდუქტით Product 1, Product 2, თქვენი დავალებაა ღილაკზე დაკლიკებაისას შექმნათ ახალი პროდუქტი ახალი რიცხვით მაგ: Product 3, Product 4 და მასივში დამატებული ყოველი ახალი მნიშვნელობა ეკლრანზე გამოჩნდეს ცვლილების (დამატების) თანავე