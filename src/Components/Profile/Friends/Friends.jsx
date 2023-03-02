import React from "react";
import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let friends = props.friends.map((friend) => (
    <Friend
      id={friend.id}
      name={friend.name}
      description={friend.description}
      imgRef={friend.imgRef}
    />
  ));
  return (
    <div>
      <h1>Friends</h1>
      <div className={styles.items}>{friends}</div>
    </div>
  );
};

export default Friends;
