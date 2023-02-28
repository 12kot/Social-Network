import React from "react";
import styles from "./Avatar.module.css";

const Avatar = (props) => {
    return (<img
        className={styles.avatar}
        src={require("./../../../../Images/avatar.jpg")}
        alt="Avatar"
      ></img>);
}

export default Avatar;