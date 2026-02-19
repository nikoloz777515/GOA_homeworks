import { useEffect } from "react";
import { useContext, createContext, useState,  } from "react";

const ProductContext = createContext()

export const useProduct = () => useContext(ProductContext)

const API_URL = 'http://localhost:3000/api/products'

export const ProductProvider = ({children}) => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
     getProducts()
  },[])


const getProducts = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    setProducts(data); // JSON array
  } catch (err) {
    console.log(err);
  }
}

  const addProduct = async (data)=>{
    try{
      const res = await fetch(`${API_URL}/product`,{
        method: 'POST',
        headers: {
  "Content-Type": "application/json"
},
body: JSON.stringify(data)
      })
      const result = await res.json()
      setProducts(prev => [...prev,result ] )
    }catch(err){
      console.log(err)
    }
  }
 
const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, 
    { method: "DELETE" })

  if (!res.ok) throw new Error("Failed to delete product")

  setProducts(prev => prev.filter(p => p._id !== id))
}

  return(
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
  {children}
</ProductContext.Provider>
  )
}

export default ProductProvider






// 1) შექმენით vite გამოყენებით რეაქთის პროექტი, დაამატეთ Admin.jsx pages ფოლდერში და ProductContext.jsx context ფოლდერში, შემდეგ შექმენით createProduct ფუნქცია კონტექსტში რომელის აგზავნის მოთხოვნას ჩვენი სერვერის იმ API_URL ზე სადაც ხდება პროდუქტის შემქნა, დააკავშირეთ ეს ფუნქცია ადმინ პანელში შექმნილ ფორმასთან