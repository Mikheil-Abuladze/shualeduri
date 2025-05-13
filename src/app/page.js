"use client";
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/product";

export default function Home() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/product" />} />
          <Route path="/product" element={<ProductList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
