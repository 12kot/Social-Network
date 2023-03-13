import React from "react";
import styles from "./Action.module.css";
import btnStyles from "./../../buttons/buttons.module.css";

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
    <div className={styles.item} style={{ backgroundColor: color }}>
      <div className={styles.text}><b>{props.message}</b></div>
      <button
        className={`${btnStyles.btn_add} ${styles.btn}`}
        onClick={compliteAction}
      >
        Complite
      </button>
      <button
        className={`${btnStyles.btn_add} ${styles.btn_del}`}
        onClick={deleteAction}
      >
        Delete
      </button>
    </div>
  );
};

export default Action;
