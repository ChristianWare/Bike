import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.hbtn}>
          <Link href='#'>
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.search}>
          <div className={styles.icon}></div>
        </div>
      </header>

      
    </div>
  );
}

export default Header;
