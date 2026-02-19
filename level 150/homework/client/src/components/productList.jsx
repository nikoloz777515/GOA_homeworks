import { useProduct } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div>
      {products.map((product) => (
        <div key={product._id} >
          <h3>{product.name}</h3>
          <img src={product.img}  width={150} />
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product._id}`}>
            <button>See More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
