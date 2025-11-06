import { Children, createContext,useState } from "react";

 export const CartContext =  createContext()
 
 export function Cartprov(){
   
 const [cart,setCart] = useState([])

    const AddTocart = (Product) =>{
        setCart((prev)=>{
            const existi = prev.find((item)=> item.id == Product.id)
            if(existi){
                return(
                    prev.map((item)=> item.id == Product.id ? {...item,quantity:item.quantity + 1}:item)
                )
            }else{
                return[...prev,{...Product,quantity: 1}]
            }
        })
    }
    const CartRemove = (ProductId) =>{
        setCart((prev)=>prev.filter((item)=>item.id !== ProductId))
    }


    const Total = cart.reduce((sum,item)=> sum + item.price * item.quantity, 0)

    return(
        <CartContext.Provider  value = {{cart,AddTocart,CartRemove,Total}}>
           {Children}
        </CartContext.Provider>
    )
}