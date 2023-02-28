import React from "react"
import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let updateMessageText = (text) => {
    let action = updateMessageActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      sendMessage={sendMessage}
      updateMessageText={updateMessageText}
      dialogsData={props.store.getState().dialogsPage.dialogsData}
      messagesData={props.store.getState().dialogsPage.messagesData}
      newMessageText={props.store.getState().dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
