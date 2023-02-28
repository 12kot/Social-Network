import React from "react";
import "./../../App.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Banner from "./Banner/Banner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={`round background-color`}>
      <Banner />
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
