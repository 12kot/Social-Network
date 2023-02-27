import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.layout_header}>
      <div className={`${styles.header} ${styles.container}`}>
        <NavLink to="/profile">
          <img src={require("./../../Images/Logo.png")} alt="Logo"></img>
          <b>Nikitosha</b>
        </NavLink>

        <a href="https://t.me/kod41" target={"_blank"} rel="noreferrer">
          Telegram
        </a>
        <a href="https://vk.com/12kot" target={"_blank"} rel="noreferrer">VKontakte</a>
        <a href="mailto:art.artem.nik@gmail.com">Mail</a>
      </div>
    </header>
  );
};

export default Header;
