import { useState } from 'react'
import Products from './Page/Page'


function App() {
  const [cart,setCart] = useState([ ])
  
  const cardRemove = () =>{

  }

  return (
    <>
   <Products />
    </>
  )
}

export default App
