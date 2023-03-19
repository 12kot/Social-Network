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
        <a href="mailto:art.artem.nik@gmail.com">Mail</a>
        <a href="https://social-network.samuraijs.com/login">{props.login ? props.login : "Login"}</a>
      </div>
    </header>
  );
};

export default Header;
