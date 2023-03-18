import { sendMessage, updateMessage } from "../../Redux/dialogsReducer";
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
  sendMessage,
  updateMessage,
})(Dialogs);

export default DialogsContainer;
