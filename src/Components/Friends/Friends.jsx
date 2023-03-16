import React from "react";
import styles from "./FriendsAPI.module.css";
import Find_friends from "./Friend/Find_friends/Find_friends";

let Friends = (props) => {
    let numberOfButtons = [];

    let pagesCount = Math.ceil(
      props.totalUsersCount / props.pageSize
    );
    for (let i = 1; i <= pagesCount; i++) {
      if (i > 100) break;
      numberOfButtons.push(i);
    }

  return (
    <div>
      <h1>Users</h1>
      <span>
        {numberOfButtons.map((i) => {
          return <button onClick={() => props.setCurrentPage(i)}>{i}</button>;
        })}
      </span>
      <div className={`${styles.friends}`}>
        <div className={`${styles.items} ${styles.friend}`}>
          {props.getUsers()}
        </div>
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