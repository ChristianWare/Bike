import Link from 'next/link'
import styles from './Navbar.module.css'


function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.horiMenu}>
            <ul>
              <li>
                <Link href='#buy'>
                  <a>Buy</a>
                </Link>
              </li>
              <li>
                <Link href='#blog'>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href='#help'>
                  <a>Help</a>
                </Link>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <Link href='#'>
                  <a>Facebook</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Navbar
