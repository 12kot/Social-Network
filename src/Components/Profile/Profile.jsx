import React from "react";
import "./../../App.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Banner from "./Banner/Banner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./profile.module.css";

const Profile = (props) => {
  return (
    <div className={`round background-color ${styles.profile}`}>
      <Banner />
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
