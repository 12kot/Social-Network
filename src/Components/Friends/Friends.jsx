import React from "react";
import Find_friends from "./Friend/Find_friends/Find_friends";
import User from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {
  let friends = props.findUsers.map((friend) => {
    if (friend.followed)
      return (
        <User
          id={friend.id}
          name={friend.name}
          description={friend.description}
          imgRef={friend.imgRef}
          followUser={props.followUser}
          followed="Посетить страницу"
          key={friend.id}
        />
      );
    else
      return (
        <User
          id={friend.id}
          name={friend.name}
          description={friend.description}
          imgRef={friend.imgRef}
          followUser={props.followUser}
          followed="Добавить в друзья"
          key={friend.id}
        />
      );
  });

  return (
    <div>
      <h1>Users</h1>
      <div className={`${styles.friends}`}>
        <div className={`${styles.items} ${styles.friend}`}>{friends}</div>
        <div className={`${styles.find_friend}`}>
          <Find_friends
            findTextChange={props.findTextChange}
            findText={props.findText}
            title_text="Find Users"
          />
        </div>
      </div>
    </div>
  );
};

export default Friends;
