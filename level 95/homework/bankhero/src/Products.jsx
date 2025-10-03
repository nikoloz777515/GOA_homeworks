import { useState,useEffect } from "react";

function Products(){
    const [data,setdata ] = useState([ ])

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then((dt) => dt.json())
        .then((result) =>setdata(result))
        .catch((err) => alert("erorr",err))
    },[])

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {data.map((Product) =>(
                    <li key={Product.key}>
                        <h2>{Product.title}</h2>
                        <p>{Product.price}</p>
                    <img src={Product.image} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products


