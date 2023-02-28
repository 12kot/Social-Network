import React from "react";

const Description = (props) => {
    return (<p>
        <b>{props.name}</b>
        <br></br>
        Age: {props.age} <br></br>
        Gender: {props.gender}<br></br>
        Desc: {props.description}
      </p>);
}

export default Description;