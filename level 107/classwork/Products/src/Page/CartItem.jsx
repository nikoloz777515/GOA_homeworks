import React from "react";

function CartItem({item,removeFromCart}){
    return(
        <div>
            <p>{item.name}</p>

            <p>{item.price.toFixed(2)} x {item.quantity}</p>

            <button >+</button>
            <button>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    )
}

export default CartItem;