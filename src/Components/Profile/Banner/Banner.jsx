import React from "react";
import b from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={b.banner}>
      <img
        className="round"
        src={require("./../../../Images/Banner.png")}
        alt="banner"
      ></img>
    </div>
  );
};

export default Banner;
