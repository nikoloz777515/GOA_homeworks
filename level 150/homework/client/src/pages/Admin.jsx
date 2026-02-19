import { useProduct } from "../context/ProductContext";

const Admin = () => {
  const { products, addProduct, deleteProduct } = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: Number(e.target.price.value),
      quantity: Number(e.target.quantity.value),
      img: e.target.img.value,
    }
    addProduct(data);
    e.target.reset();
  }
  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" required />
        <input type="text" name="description" placeholder="Description" required />
        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="quantity" placeholder="Quantity" required />
        <input type="text" name="img" placeholder="Image URL" required />
        <button type="submit">Submit</button>
      </form>

      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <img src={product.img} width={100}  />
            <button onClick={() => deleteProduct(product._id)} >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin;
