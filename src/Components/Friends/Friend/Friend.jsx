import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Friend.module.css";

let Friend = (props) => {
  const photo =
    props.imgRef != null
      ? props.imgRef
      : require(`./../../../Images/avaAnonymous.jpg`);

  let path = `/profile/${props.id}`;

  let followUser = () => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if(response.data.resultCode === 0)
          props.followUser(props.id);
      });
  };

  return (
    <div>
      <div className={`${styles.friend} ${styles.item}`}>
        <NavLink to={path}>
          <img
            className={`${styles.avatar} ${styles.item}`}
            src={photo}
            alt="ava"
          ></img>
        </NavLink>
        <div className={`${styles.name}`}>
          <b>{props.name}</b>
        </div>
        <div className={`${styles.title}`}>{props.description}</div>
        <button
          onClick={followUser}
          className={`${styles.footer} ${styles.item}`}
        >
          {props.followed}
        </button>
      </div>
    </div>
  );
};

export default Friend;
