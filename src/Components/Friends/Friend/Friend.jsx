import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friend.module.css";

let Friend = (props) => {
  const photo = require(`./../../../Images/${props.imgRef}.jpg`);
  let path = `/friends/${props.id}`;

  let followUser = () => {
    props.followUser(props.id);
  }

  return (
    <NavLink to={path}>
      <div className={`${styles.friend} ${styles.item}`}>
        <img
          className={`${styles.avatar} ${styles.item}`}
          src={photo}
          alt="ava"
        ></img>
        <div className={`${styles.name}`}>
          <b>{props.name}</b>
        </div>
        <div className={`${styles.title}`}>{props.description}</div>
        <button onClick={followUser} className={`${styles.footer} ${styles.item}`}>
          {props.followed}
        </button>
      </div>
    </NavLink>
  );
};

export default Friend;
