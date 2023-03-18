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

const DialogsContainer = connect(mapStateToProps, {
  sendMessage: sendMessageActionCreator,
  updateMessageText: updateMessageActionCreator,
})(Dialogs);

export default DialogsContainer;
