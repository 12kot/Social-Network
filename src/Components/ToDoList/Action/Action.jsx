import React from "react";
import styles from "./../../buttons/buttons.module.css";

const Action = (props) => {
  let color;

  if (props.status === "complite") {
    color = "#24c724bf";
  }

  let deleteAction = () => {
    props.deleteAction(props.id);
  };

  let compliteAction = () => {
    props.compliteAction(props.id);
  };

  return (
    <div>
      <li style={{ backgroundColor: color }}>
        {props.message}
        <button className={styles.btn_add} onClick={compliteAction}>
          Complite
        </button>
        <button className={styles.btn_add} onClick={deleteAction}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Action;
