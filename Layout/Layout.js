import styles from "./Layout.module.css";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className={styles.container}>
    <Header />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
