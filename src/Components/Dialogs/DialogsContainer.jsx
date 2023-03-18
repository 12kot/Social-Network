import {
  sendMessageActionCreator,
  updateMessageActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = () => {
  return {
    sendMessage: sendMessageActionCreator,
    updateMessageText: updateMessageActionCreator,
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
