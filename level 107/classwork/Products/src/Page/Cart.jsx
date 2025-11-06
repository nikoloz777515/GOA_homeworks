import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "./CartContext"

function Cart(){
    const {cart,AddTocart,CartRemove,Total} = useContext(CartContext)

    if(cart.length === 0){
        return <p>
            Your Cart is empty
        </p>
    }
    return(
        <div>
            {cart.map((item)=>
            <CartItem key={item.id} item = {item} CartRemove={CartRemove}/>
            )}
            <h2>Total: {Total.toFixed(2)}</h2>
        </div>
    )

}

export default Cart