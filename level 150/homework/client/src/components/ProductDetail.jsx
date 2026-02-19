import { useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext"

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useProduct();

  const product = products.find((p) => p._id === id)

  if (!product) return <p>Product not found</p>

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} width={300} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default ProductDetails
