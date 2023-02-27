import React from "react";
import Post from "./MyPost/Post";
import styles from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profileReducer";
import btn from "./../../buttons/buttons.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let postChange = () => {
    props.dispatch(updatePostActionCreator(newPostElement.current.value));
  };

  return (
    <div>
      My post
      <div>
        <div className={styles.input_box}>
          <textarea
            rows={3}
            cols={110}
            placeholder="Input text"
            type="text"
            onChange={postChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div className={styles.input_box}>
          <button className={btn.btn_add} onClick={addPost}>
            Publish
          </button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
