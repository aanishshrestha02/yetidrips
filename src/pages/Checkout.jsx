import { useCart } from "./context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const placeOrder = async (e) => {
    e.preventDefault();

    const form = e.target;
    const order = {
      name: form.name.value,
      phone: form.phone.value,
      address: form.address.value,
      items: cart,
      status: "Pending",
      createdAt: Timestamp.now()
    };

    await addDoc(collection(db, "orders"), order);
    clearCart();
    alert("Order placed successfully!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout (Cash on Delivery)</h1>

      <form onSubmit={placeOrder}>
        <input name="name" placeholder="Full Name" required /><br />
        <input name="phone" placeholder="Phone Number" required /><br />
        <textarea name="address" placeholder="Delivery Address" required /><br />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
