import Product from "../Products.js";

function Products() {
  return (
    <div className="product-list">
      {Product.map((item, index) => (
        <div key={index} className="product-card">
          <img src={item.image.desktop} alt={item.name} />
          <button>Add To Cart</button>
          <h3>{item.name}</h3>
          <p>{item.category}</p>
          <span>${item.price.toFixed(2)}</span>
        </div>
      ))}
    </div>
  );
}

export default Products;
