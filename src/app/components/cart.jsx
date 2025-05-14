"use client";
import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/carts/1");
      if (!response.ok) throw new Error("Failed to fetch cart");
      const data = await response.json();
      setCart(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!cart) return <div>Error loading cart.</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl">Cart Details</h1>
      <p>User ID: {cart.userId}</p>
      <h2 className="text-lg">Products:</h2>
      <ul className="list-disc ml-6">
        {cart.products.map((product) => (
          <li key={product.productId}>
            Product ID: {product.productId} - Quantity: {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
