import Head from "next/head";
import BlogsMini from "../comps/BlogsMini";
import Burger from "../comps/Burger";
import ProjectsMini from "../comps/ProjectsMini";
import Socialmedia from "../comps/Socialmedia";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhishek Sunil</title>
      </Head>
      <Burger />
      <div id="home" className={styles.main}>
        <h1 className={styles.introduction}>
          Hello I'm Abhishek.
          <br /> I love developing random applications, mostly using JavaScript.
        </h1>
        <img
          className={styles.image}
          src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg"
          alt=""
        ></img>
        <p className={styles.subIntroduction}>
          I enjoy working on projects where approaching design and development
          as co-dependent processes can lead to smarter solutions and a better
          overall product experience
        </p>
        <Socialmedia />
      </div>
      <a className="scroll-down-indicator" href="#projects">
        Scroll Down
      </a>
      <div className="about" id="about">
        <p>
          Currently I am working on personal projects, and have interned at
          Gtropy as a Frontend Engineer. I like gaming and reading.
        </p>
        <p>
          In this portfolio, you will find my <a href="#projects">Projects </a>,
          <a href="#blogs">Blog</a> , and all the other things that I want to
          show the world.
        </p>
      </div>
      <ProjectsMini />
      <BlogsMini />
      <footer>
        <div className="footer-links">
          <a style={{ color: "#999" }} href="#top">
            Scroll to Top
          </a>
          <a href="#projects">Projects</a>
          <a href="#blogs">Blog</a>
          <a href="#about">About me</a>
        </div>
        <div className="footer-social">
          <Socialmedia />
        </div>
      </footer>
    </>
  );
}
