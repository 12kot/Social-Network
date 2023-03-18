import React from "react";
import Post from "./MyPost/Post";
import styles from "./MyPosts.module.css";
import btn from "./../../buttons/buttons.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} key={post.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let updatePost = () => {
    props.updatePost(newPostElement.current.value);
  };

  return (
    <div>
      My post
      <div>
        <div className={styles.input_box}>
          <textarea
            rows={3}
            placeholder="Input text"
            type="text"
            onChange={updatePost}
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
