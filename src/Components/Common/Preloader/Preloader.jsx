import React from "react";
import styles from "./Preloader.module.css"

let Preloader = () => {
  return (
    <div>
      <img className={`${styles.preloader}`} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="preloader"/>
    </div>
  );
};

export default Preloader;
