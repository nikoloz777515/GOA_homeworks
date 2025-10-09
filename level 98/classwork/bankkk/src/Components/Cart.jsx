const Cart = ({ cart, onIncrease, onDecrease }) => {
  return (
    <section>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p><b>{item.title}</b></p>
              <p>Price: ${item.price}</p>
              <p>Units: {item.unit}</p>
              <button onClick={() => onDecrease(item.id)}>-</button>
              <button onClick={() => onIncrease(item.id)}>+</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;
