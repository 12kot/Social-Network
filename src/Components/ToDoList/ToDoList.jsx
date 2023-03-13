import React from "react";
import Action from "./Action/Action";
import styles from "./ToDoList.module.css";
import stylesBtn from "./../buttons/buttons.module.css";

const ToDoList = (props) => {
  let list = props.list.map((obj) => (
    <Action
      message={obj.message}
      id={obj.id}
      status={obj.status}
      deleteAction={props.deleteAction}
      compliteAction={props.compliteAction}
      key={obj.id}
    />
  ));

  let textareaRef = React.createRef();

  let addAction = () => {
    props.addAction();
  };

  let actionChange = () => {
    props.actionChange(textareaRef.current.value);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <textarea
          className={styles.input}
          placeholder="Input action"
          ref={textareaRef}
          onChange={actionChange}
          value={props.actionChangeText}
        ></textarea>
        <button className={stylesBtn.btn_add} onClick={addAction}>
          Add Action
        </button>
      </div>

      <div className={styles.items}>{list}</div>
    </div>
  );
};

export default ToDoList;
