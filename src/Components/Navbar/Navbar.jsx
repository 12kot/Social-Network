import React from "react";
import styles from "./navbar.module.css";
import "./../../App.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className={`${styles.nav} round background-color`}>
      <div className={styles.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/friends">
          Friends<br></br>
          <img
            className={styles.avatar}
            src={require("./../../Images/avatar.jpg")}
            alt="Avatar"
          ></img>
          <img
            className={styles.avatar}
            src={require("./../../Images/avatar.jpg")}
            alt="Avatar"
          ></img>
          <img
            className={styles.avatar}
            src={require("./../../Images/avatar.jpg")}
            alt="Avatar"
          ></img>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
