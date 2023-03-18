import React from "react";
import btn from "./../../../buttons/buttons.module.css";
import styles from "./Find_friends.module.css";

let Find_friends = (props) => {
  let textChangeRef = React.createRef();

  let onFindChange = () => {
    props.findTextChange(textChangeRef.current.value);
  };

  return (
    <div className={`${styles.find}`}>
      <h3>{props.title_text}</h3>
      <div className={`${styles.input_box}`}>
        <textarea
          rows={1}
          placeholder={props.title_text}
          type="text"
          value={props.findText}
          ref={textChangeRef}
          onChange={onFindChange}
        />
      </div>
      <div className={`${styles.input_box}`}>
        <button className={`${btn.btn_add}`}>find</button>
      </div>
    </div>
  );
};

export default Find_friends;
