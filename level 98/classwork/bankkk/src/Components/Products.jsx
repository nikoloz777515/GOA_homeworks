const ProductList = ({ products, onAddToCart }) => {
  return (
    <section>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "20px" }}>
            <p><b>{product.title}</b></p>
            <p>${product.price}</p>
            <p>{product.category}</p>
            <img src={product.image} width={100} alt={product.title} />
            <br />
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList



// 1) გაამარტივეთ ეს კოდი და დაყავით 3 კომპონენტად, Product list, Cart და Checkout კომპონენტები, გადაიტანეთ ფუნქციები შესაბამის კომპონენტებში საბოლოოდ კი გააერთიანეთ