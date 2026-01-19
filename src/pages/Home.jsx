import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const products = [
  { id: "1", name: "T-Shirt", price: 25 },
  { id: "2", name: "Shoes", price: 50 }
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <h1>My Store</h1>
      <Link to="/cart">🛒 Go to Cart</Link>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {products.map(p => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

////asdasdasdasdasd
