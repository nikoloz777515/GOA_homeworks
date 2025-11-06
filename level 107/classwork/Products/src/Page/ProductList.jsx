import ProductCard from "./ProductCard";
import React from "react";

function ProductList({products}){
    return(
        <div style={{display:"flex",gap:"1rem"}}>
            {
                products.map((product) => (
   <ProductCard key={product.id} product={product} />
))

            }
        </div>
    )
}

export default ProductList