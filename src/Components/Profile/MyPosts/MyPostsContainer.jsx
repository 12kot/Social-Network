import { connect } from "react-redux";
import {
  addPostActionCreator,
  updatePostActionCreator,
} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = () => {
  return {
    addPost: addPostActionCreator,
    postChange: updatePostActionCreator,
  };
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
