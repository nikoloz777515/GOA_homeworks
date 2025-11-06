import { useState } from 'react'
import useForm from './hooks/useForm'

function App() {
   const { formData, handlechange } = useForm({ fullname: "", email: "" ,password: ""});

     const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"  onChange={handlechange} value={formData.fullname} name='fullname' placeholder='fullname' />

        <input type="email"  onChange={handlechange} value={formData.email} name='email' placeholder='email' />

        <input type="password" onChange={handlechange} value={formData.password} name='password' placeholder='password' />

        <button type='submit'>submit</button>
      </form>


    
      
    </>
  )
}

export default App
