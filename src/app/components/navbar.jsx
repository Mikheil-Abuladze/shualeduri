"use client"
import React from "react";
import styles from "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-4">
      <Link to="/product" className="mr-4">Product</Link>
      <Link to="/profile" className="mr-4">Profile</Link>
      <Link to="/cart" className="mr-4">Cart</Link>
    </nav>
  );
}
