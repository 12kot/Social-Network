import { connect } from "react-redux";
import ToDoList from "./ToDoList";
import {
  deleteActionCreator,
  compliteActionCreator,
  actionChangeCreator,
  addActionCreator,
} from "../../Redux/toDoListReducer";

let mapStateToProps = (state) => {
  return {
    list: state.toDoList.actions,
    actionChangeText: state.toDoList.actionChangeText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteAction: (id) => {
      dispatch(deleteActionCreator(id));
    },

    compliteAction: (id) => {
      dispatch(compliteActionCreator(id));
    },

    actionChange: (message) => {
      dispatch(actionChangeCreator(message));
    },

    addAction: () => {
      dispatch(addActionCreator());
    },
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
