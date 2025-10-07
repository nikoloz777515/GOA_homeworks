import { useEffect,useState } from "react";
function Products (){

const [data,setData] = useState([])
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("Error", err))
        
    },[])

    return(
        <section>
            <h1>Product List</h1>
            <ul>
                {
                    data.map(product =>(
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <h2>{product.price}</h2>
                            <p>{product.description}</p>
                            <img src={product.image} width = "100px"/>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Products


// 1) შექმენით section ელემენტი სათაურად Product List, useEffect გამოყენებით მოთხოვნა გააგზავნეთ ქვემოთ მოპცემულ მისამართზე, დაბრუნებული მასივი მიანიჭეთ მდგომარეობას, მდგომარეობაში შენახული პროდუქტების მასივი კი უნდა დაარენედეროთ გამოიყენეთ map მეთოდი და შექმენით სია თავისი სათა