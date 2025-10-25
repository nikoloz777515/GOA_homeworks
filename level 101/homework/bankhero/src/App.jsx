import { useState } from "react";

const App = () => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });
  const [products, setProducts] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]:value }))
  };

  const handleAdd = () => {
    const entries = Object.entries(formState);
    const filteredArr = entries.filter(pair => pair[1] == "");

    if(filteredArr.length == 0) {
      setProducts(prev => [...prev, formState]);
      setMessages([]);
      setFormState({
        name: "",
        description: "",
        price: "",
        quantity: ""
      })
      alert("Product added");
      return;
    }

    setMessages(filteredArr.map(pair => `Please fill out ${pair[0]} input!`));
  };

  const handleReset = () => {
    setFormState({
      name: "",
      description: "",
      price: "",
      quantity: ""
    });
    setMessages([]);
  };
  

  return (
   <main className="flex flex-col items-center justify-center min-h-screen bg-green-400">

      <h1 className="font-black text-4xl pe-px underline mb-30">Admin Panel</h1>

      <section className="bg-fuchsia-500">
        <h2 className="text-2xl text-blue-500 bg-emerald-700 font-black ">Add product</h2>
        <form className="">
          <input type="text" onChange={handleChange} name="name" value={formState.name} placeholder="Product name" className="bg-amber-50" /> <br />
          <input type="text" onChange={handleChange} name="description" value={formState.description} placeholder="Product description"  className="bg-amber-300"/> <br />
          <input type="number" onChange={handleChange} name="price" value={formState.price} placeholder="Product price" className="bg-blue-600"/> <br />
          <input type="number" onChange={handleChange} name="quantity" value={formState.quantity} placeholder="Product quantity" className="bg-amber-350" /> <br />
          <button type="button" onClick={handleAdd}>Submit</button> <br />
          <button type="reset" onClick={handleReset}>Reset</button>

          {
            
            messages.length != 0 && (
              <div>
                <h3>Some inputs need to be filled!</h3>
                {
                  messages.map(message => <p key={message}>{message}</p>)
                }
              </div>
            )

          }
        </form>
      </section>

      <section>
        <h2>Added Products</h2>

        <ol>
          {
            products.length != 0 ? products.map(product => (
              <li key={product.name}>
                <p>Name: {product.name}</p>
                <p>Description: {product.description}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            )) : <p>Please add products</p>
          }
        </ol>
      </section>
    </main>
  )
}

export default App;
