import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.navbar}>
        <span>products</span>
        <span>profile</span>
        <span>cart</span>
      </header>
    </div>
  );
}
