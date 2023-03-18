import React from "react";
import styles from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.description}>
        <div>
          <Avatar
            photos={props.photos}
          />
        </div>
        <div>
          <Description
            fullName={props.fullName}
            aboutMe={props.aboutMe}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
