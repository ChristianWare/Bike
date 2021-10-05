import Link from "next/link";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heading}>
      <h1>
        Feel The <span>RIDE</span>
      </h1>
      <p>Take a short ride but feel the enviornment as like the others do.</p>
      <Link href='#'>
        <a>Ride Now</a>
      </Link>
    </div>
  );
}

export default Hero;
