import { useState } from "react";

const ProductForm = ({ onAddProduct }) => {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: "",
    quantity: ""
  });
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const entries = Object.entries(formState);
    const filteredArr = entries.filter((pair) => pair[1] === "");

    if (filteredArr.length === 0) {
      onAddProduct(formState);
      setFormState({ name: "", description: "", price: "", quantity: "" });
      setMessages([]);
      alert(" Product added sucessfuly!");
      return;
    }

    setMessages(filteredArr.map((pair) => `Please fill out ${pair[0]} input!`));
  };

  const handleReset = () => {
    setFormState({ name: "", description: "", price: "", quantity: "" });
    setMessages([]);
  };

  return (
    <form>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Product name"
      />
      <br />
      <input
        type="text"
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Product description"
      />
      <br />
      <input
        type="number"
        name="price"
        value={formState.price}
        onChange={handleChange}
        placeholder="Product price"
      />
      <br />
      <input
        type="number"
        name="quantity"
        value={formState.quantity}
        onChange={handleChange}
        placeholder="Product quantity"
      />
      <br />
      <button type="button" onClick={handleAdd}>Submit</button>
      <button type="reset" onClick={handleReset}>Reset</button>

      {messages.length !== 0 && (
        <div>
          <h4>Some inputs need to be filled</h4>
          {messages.map((m) => (
            <p key={m}>{m}</p>
          ))}
        </div>
      )}
    </form>
  );
};

export default ProductForm;


// 1) შექმენით ფორმა სადაც მომხმარებელს შეეძლება პროდუქტის სახელის, აღწერის, ფასისა და რაოდენობის ჩაწერა, თითოეულუ ინფუთი უნდა იყოს კონტროლირებადი (რადგანაც ინფუთების რაოდენობა ბევბრია შემქენით ერთი მდგომარეობა ობვიექტის სახით და აკონტროლეთ თითოეული მათგჰანი) როდესაც ღილაკზე დააჭერს ხელს მომხმარებელი, ინფუთები უნდა გასუფთავდეს და პროდუქტი უნდა დაემატოს products მდგომარეობაში, შემდეგ კი ახალ დამატებული პროდუქტი სიის ბოლოში უნდა გამოჩნდეს (გამოიეყენთ ul)