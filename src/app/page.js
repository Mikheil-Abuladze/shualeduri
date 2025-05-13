"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/product";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <nav className="p-4 bg-gray-100">
        <Link to="/product" className="mr-4">
          Product
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
