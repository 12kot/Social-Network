import React from "react";

const Description = (props) => {
    return (<p>
        <b>{props.fullName}</b>
        <br />
        About Me: {props.aboutMe}
      </p>);
}

export default Description;