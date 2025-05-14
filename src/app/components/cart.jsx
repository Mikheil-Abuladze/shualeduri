"use client";
import { useState, useEffect } from "react";
import styles from "./cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart and product data
  const fetchCartData = async () => {
    try {
      // Fetch cart items
      const cartResponse = await fetch("https://fakestoreapi.com/carts/1");
      if (!cartResponse.ok) throw new Error("Failed to fetch cart");
      const cartData = await cartResponse.json();

      // Fetch all products
      const productsResponse = await fetch("https://fakestoreapi.com/products");
      if (!productsResponse.ok) throw new Error("Failed to fetch products");
      const productsData = await productsResponse.json();

      // Map product details to cart items
      const detailedCartItems = cartData.products.map((cartItem) => {
        const product = productsData.find((p) => p.id === cartItem.productId);
        return {
          ...cartItem,
          name: product?.title,
          price: product?.price,
          image: product?.image,
        };
      });

      setCartItems(detailedCartItems);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!cartItems.length) return <div>No items in the cart.</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl">Cart Details</h1>
      {cartItems.map((item, index) => (
        <div key={index} className="p-2 border-b flex items-center gap-4">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
          <div>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}