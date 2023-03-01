const DELETE_ACTION = "DELETE_ACTION";
const ADD_ACTION = "ADD_ACTION";
const COMPLITE_ACTION = "COMPLITE_ACTION";
const ACTION_CHANGE = "ACTION_CHANGE";
const COMPLITE = "complite";
const NO_COMPLITE = "noComplite";

let ID = 5;

let initialState = {
  actions: [
    { id: 1, message: "Hi", status: "complite" },
    { id: 2, message: "Hello", status: "complite" },
    { id: 3, message: "URA", status: "noComplite" },
    { id: 4, message: "LOL", status: "noComplite" },
  ],

  actionChangeText: "",
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ACTION:
      return _deleteAction(state, action.id);
    case ADD_ACTION:
      return _addAction(state);
    case COMPLITE_ACTION:
      return _compliteActionCreator(state, action.id);
    case ACTION_CHANGE:
      return _actionChange(state, action.message);
    default:
      return state;
  }
};

const _addAction = (state) => {
  if (state.actionChangeText === "") return state;

  let newAction = {
    type: ACTION_CHANGE,
    id: ID++,
    message: state.actionChangeText,
    status: NO_COMPLITE,
  };

  let newState = JSON.parse(JSON.stringify(state));
  newState.actions.push(newAction);
  newState.actionChangeText = "";

  return newState;
};

export const addActionCreator = () => {
  return {
    type: ADD_ACTION,
  };
};

const _actionChange = (state, message) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.actionChangeText = message;
  return newState;
};

export const actionChangeCreator = (message) => {
  return {
    type: ACTION_CHANGE,
    message: message,
  };
};

const _deleteAction = (state, id) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.actions = [];

  state.actions.forEach((element) => {
    if (element.id !== id) newState.actions.push(element);
  });

  return newState;
};

export const deleteActionCreator = (id) => {
  return {
    type: DELETE_ACTION,
    id: id,
  };
};

const _compliteActionCreator = (state, id) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.actions.forEach((element) => {
    if (element.id === id) {
      element.status = COMPLITE;
      return;
    }
  });

  return newState;
};
export const compliteActionCreator = (id) => {
  return {
    type: COMPLITE_ACTION,
    id: id,
  };
};

export default toDoListReducer;
