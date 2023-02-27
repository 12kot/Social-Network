import React from "react";
import p from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={p.item}>
        <img src={require("./../../../../Images/avatar.jpg")} alt="ava"></img>
        {props.message}
        <div className={p.likes}>
          <span> Likes: {props.likesCount} </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
