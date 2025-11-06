import { useContext } from "react";
// import Product from "../Products.js";
import { CartContext } from "./CartContext.jsx";

function ProductCard({Product}){
    const {AddTocart} = useContext(CartContext)
    return(
        <div>
            <h1>{Product.name}</h1>

            <p>{Product.price.toFixed(2)}</p>

            <button onClick={() => AddTocart(Product)}>Add To Cart</button>
        </div>
    )
}
export default ProductCard;
