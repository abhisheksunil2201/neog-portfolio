import styles from "../styles/Home.module.css";

const Socialmedia = () => {
  return (
    <div className={styles.socials}>
      <a href="https://www.linkedin.com/in/abhishek-2201/">
        <img src="in.png" width="42" alt="" />
      </a>
      <a href="https://github.com/abhisheksunil2201">
        <img src="git.png" width="42" alt="" />
      </a>
      <a href="https://www.instagram.com/abhishek_sunil/">
        <img src="ig.png" width="42" alt="" />
      </a>
      <a href="https://twitter.com/iamabhi2201">
        <img src="twitter.svg" width="42" alt="" />
      </a>
    </div>
  );
};

export default Socialmedia;
