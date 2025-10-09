import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // Fetching product data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  // Calculate total price whenever cart changes
  useEffect(() => {
    const sum = cart.reduce((prev, cur) => prev + cur.unit * cur.price, 0);
    setPrice(sum.toFixed(2));
  }, [cart]);

  const handleAddToCart = (prod) => {
    const existing = cart.find((item) => item.id === prod.id);
    if (!existing) {
      setCart([...cart, { ...prod, unit: 1 }]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === prod.id ? { ...item, unit: item.unit + 1 } : item
        )
      );
    }
  };

  const handleIncreaseUnit = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, unit: item.unit + 1 } : item
      )
    );
  };

  const handleDecreaseUnit = (id) => {
    const found = cart.find((item) => item.id === id);
    if (found.unit === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, unit: item.unit - 1 } : item
        )
      );
    }
  };

  return (
    <main>
      <h1>My Market</h1>

      <ProductList products={products} onAddToCart={handleAddToCart} />

      <Cart
        cart={cart}
        onIncrease={handleIncreaseUnit}
        onDecrease={handleDecreaseUnit}
      />

      <Checkout price={price} setPrice={setPrice} />
    </main>
  );
};

export default App;

// clousure  ანუ შიგნითა ფუნქციას შეუძლია რომ გამოიყენოს გარე ფუნქციის ცვლადები გინდ  მაშინ როცა გარეთა ფუნქცია უკვე დასრულებულია
