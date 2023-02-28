import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import btn from "./../buttons/buttons.module.css";

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message id={message.id} message={message.message} />
  ));

  let getMessage = React.createRef();

  let sendMessage = () => {
    props.sendMessage();
  };

  let updateMessageText = () => {
    props.updateMessageText(getMessage.current.value);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messagesElements}
        <div>
          <div className={styles.input_box}>
            <textarea
              autoFocus
              onChange={updateMessageText}
              ref={getMessage}
              value={props.newMessageText}
            ></textarea>
          </div>
          <div className={styles.input_box}>
            <button className={btn.btn_add} onClick={sendMessage}>
              SendMessage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
