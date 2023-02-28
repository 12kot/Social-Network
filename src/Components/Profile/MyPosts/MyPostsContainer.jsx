import React from "react";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let postChange = (text) => {
    let action = updatePostActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      addPost={addPost}
      postChange={postChange}
      posts={props.store.getState().profilePage.posts}
      newPostText={props.store.getState().profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
