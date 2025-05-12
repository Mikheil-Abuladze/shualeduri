import React from "react";
import styles from "./navbar.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <span>products</span>
      <span>profile</span>
      <span>cart</span>
    </header>
  );
};

export default Navbar;
