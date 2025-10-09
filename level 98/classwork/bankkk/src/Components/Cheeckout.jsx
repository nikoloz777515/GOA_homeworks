const Checkout = ({ price, setPrice }) => {
  const promocodes = [
    { code: "DISCOUNT10", discount: 0.1 },
    { code: "DISCOUNT20", discount: 0.2 },
    { code: "DISCOUNT50", discount: 0.5 },
    { code: "FREE", discount: 1 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const promocode = e.target.promo.value.trim().toUpperCase()
    const match = promocodes.find((p) => p.code === promocode)

    if (match) {
      const discounted = price - price * match.discount;
      setPrice(discounted.toFixed(2))
      alert(`Promocode applied! You got ${match.discount * 100}% of`)
    } else {
      alert("Invalid promocode")
    }
    
  }

  return (
    <section>
      <h2>Checkout</h2>
      <p>Total Price: ${price}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="promo" placeholder="Enter promocode" />
        <button type="submit">Apply</button>
      </form>
    </section>
  )
}

export default Checkout
