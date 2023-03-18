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

let MyPostsContainer = connect(mapStateToProps, {
  addPost: addPostActionCreator,
  postChange: updatePostActionCreator,
})(MyPosts);

export default MyPostsContainer;
