import React from "react";
import styles from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={styles.description}>
        <div>
          <Avatar />
        </div>
        <div>
          <Description
            name="Nikita"
            age="19"
            gender="female"
            description="Nikitosha"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
