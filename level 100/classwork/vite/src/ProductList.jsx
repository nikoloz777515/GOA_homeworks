const ProductList = ({ products, onDelete }) => {
  if (products.length === 0) {
    return <p>No products added yet</p>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <div
          
        >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p> Price: {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => onDelete(index)}> Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList;
