import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <strong>{item.name}</strong> – ${item.price}
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) => updateQty(item.id, +e.target.value)}
            style={{ width: 50, marginLeft: 10 }}
          />
          <button onClick={() => removeFromCart(item.id)}>❌</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      {cart.length > 0 && (
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}
