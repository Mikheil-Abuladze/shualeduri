"use client";
import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
