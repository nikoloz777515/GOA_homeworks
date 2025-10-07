import { useEffect,useState } from "react";
function Products (){

const [data,setData] = useState([])

const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("Error", err))
        
    },[])

    const  handleToAddCart = (produc) =>{
        const product = {...produc, unit:1}
        setCart([...cart,product])
    }
    console.log(cart)

    const handleIncrease = (id) =>{
        const updatedCart = cart.map((item) =>item.id === id? {...item,unit:item.unit +1} : item)
        setCart(updatedCart)
    }
const handleDecrease = (id) => {
  const updCart = cart
    .map((item) => (item.id === id ? { ...item, unit: item.unit - 1 } : item))
    .filter((item) => item.unit > 0);
  setCart(updCart);
};

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.unit,
    0
  )


    return(
    <div>
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
                            <button onClick= {() => handleToAddCart(product)}>Add</button>
                        </li>
                    ))
                }
            </ul>
        </section>

        <section>
            <h1>Cart</h1>
                <ul>
                    {
                        cart.map((item,index) =>(
                            <li key={index}>
                                {item.title} 
                                {item.price}<br/>
                                {item.unit}

                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  <button onClick={() => handleDecrease(item.id)}>-</button>

                  <p>total {totalPrice}</p>
                            </li>
                        ))
                    }
                </ul>
        </section>
    </div>
    )
}

export default Products


// 2) შექმენით cart მდგომარეობა და დაამატეთ handleToAddCart ფუნქცვიოა რომელსაც გადაეცამა პროდუქტი რომლის დამატებაც გვინდა კალატაში, თვქნე მაგ პროდუქტის ობიექტის გამოყენებით უნდა შექმნათ კლლონი სადაც ჩასვამთ unit კუთვნილებას რომელიც თავიდან უდრის 1, ხოლო ყოველი ახალი პროდუქტის დამატების შემდეგ დაარენდერეთ კალატა

// 1) შექმენით section ელემენტი სათაურად Product List, useEffect გამოყენებით მოთხოვნა გააგზავნეთ ქვემოთ მოპცემულ მისამართზე, დაბრუნებული მასივი მიანიჭეთ მდგომარეობას, მდგომარეობაში შენახული პროდუქტების მასივი კი უნდა დაარენედეროთ გამოიყენეთ map მეთოდი და შექმენით სია თავისი სათა