import React from "react";
import Preloader from "../../../Common/Preloader/Preloader";
import styles from "./Avatar.module.css";

const Avatar = (props) => {
  return (
    <>
      {!props.photos ? (
        <Preloader />
      ) : (
        <img
          className={styles.avatar}
          src={
            props.photos.small != null
              ? props.photos.small
              : require("./../../../../Images/avaAnonymous.jpg")
          }
          alt="Avatar"
        ></img>
      )}
    </>
  );
};

export default Avatar;
