import { useState } from "react";


function Idk(){
    const [formState,setFormstate] = useState({ })

    const handleChange = ({target}) =>{
        const {name,value} = target

        setFormstate(prev =>({
            ...prev,
            [name]:value
        }))
   }

    return (
    <>
      <form>
        <input 
          onChange={handleChange} 
          type="text" 
          name="name" 
          placeholder="name" 
        />

        <input 
          onChange={handleChange} 
          type="text" 
          name="lastname" 
          placeholder="lastname" 
        />

        <p>name: {formState.name}</p>
        <p>lastname: {formState.lastname}</p>
      </form>

    </>)

}

export default Idk;



//უკეთსი იმიტომაა რომ წინასთან შედარებით უფრო მარტივი და მოკლე კოდია, ასევე უფრო დალაგებული(დაორგანიზებული) კოდია