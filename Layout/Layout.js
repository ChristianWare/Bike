import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
