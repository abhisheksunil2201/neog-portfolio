import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Burger = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let element = document.querySelector(".burger");
    if (element && menu) {
      element.style.height = "100%";
      element.style.width = "100%";
      element.style.paddingTop = "10%";
      element.style.visibility = "visible";
      element.style.color = "white";
      element.style.borderRadius = "0px";
    }
    if (element && !menu) {
      element.style.height = "0%";
      element.style.width = "0%";
      element.style.paddingTop = "0";
      element.style.visibility = "hidden";
      element.style.color = "black";
      element.style.borderRadius = "0 0 300% 0";
    }
  }, [menu]);

  return (
    <>
      <a
        href="#toggle"
        className={menu ? "no-hamburgler hamburgler" : "hamburgler"}
        onClick={() => setMenu(!menu)}
      >
        <div className="bun top"></div>
        <div className="meat"></div>
        <div className="bun bottom"></div>
      </a>
      {
        <div className={styles.burger + " burger"}>
          <div onClick={() => setMenu(false)}>
            <a href="#top">Home</a>
          </div>
          <div onClick={() => setMenu(false)}>
            <a href="#projects">Projects</a>
          </div>
          <div onClick={() => setMenu(false)}>
            <a href="#blogs">Blogs</a>
          </div>
          <div onClick={() => setMenu(false)}>
            <a href="#about">About</a>
          </div>
        </div>
      }
    </>
  );
};

export default Burger;
