import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct])
  }

  const handleDeleteProduct = (index) => {
    setProducts((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <main>
      <section>
        <h2>Add a Product</h2>
        <ProductForm onAddProduct={handleAddProduct} />
      </section>

      <section>
        <h2>Product List</h2>
        <ProductList products={products} onDelete={handleDeleteProduct} />
      </section>
    </main>
  )
}

export default App;

