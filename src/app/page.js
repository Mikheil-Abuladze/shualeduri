import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import ReactDOM from "react-dom";
import ProductList from "../components/product";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <span>products</span>
        <span>profile</span>
        <span>cart</span>
      </header>
      <ProductList />
    </div>
  );
}
