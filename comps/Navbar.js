import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav id="nav" className={styles.nav}>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/Projects">
        <a>PROJECTS</a>
      </Link>
      <Link href="/Blogs">
        <a>BLOG</a>
      </Link>
      <Link href="/#about">
        <a>ABOUT</a>
      </Link>
    </nav>
  );
};

export default Navbar;
