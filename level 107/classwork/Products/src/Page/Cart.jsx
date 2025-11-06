import { useContext } from "react"
import CartItem from "./CartItem"
import { CartContext } from "./CartContext"

function Cart(){
    const {cart,removeFromCart,total} = useContext(CartContext)

    if(cart.lenth === 0){
        return <p>
            Your Cart is empty
        </p>
    }
    return(
        <div>
            {cart.map((item)=>
            <CartItem key={item.id} item = {item} removeFromCart={removeFromCart}/>
            )}
            <h2>Total: {total.toFixed(2)}</h2>
        </div>
    )

}

export default Cart