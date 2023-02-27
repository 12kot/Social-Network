import React from "react";
import d from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";

const ProfileInfo = (props) => {
    return (<div>
        <div className={d.description}>
          <Avatar />
          <Description name="Nikita" age="19" gender="female" description="Nikitosha"/>
        </div>
      </div>);
}

export default ProfileInfo;