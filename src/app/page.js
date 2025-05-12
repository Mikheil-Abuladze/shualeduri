import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import ReactDOM from "react-dom";
import ProductList from "../components/product";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <ProductList />
    </div>
  );
}
