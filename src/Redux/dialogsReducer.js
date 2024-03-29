const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: 1, name: "Nikita" },
    { id: 2, name: "Misha" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Nikitosha" },
    { id: 5, name: "Katya" },
  ],

  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "Привет" },
    { id: 5, message: "Hola" },
  ],

  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return _sendMessage(state);
    case UPDATE_MESSAGE_TEXT:
      return _updateMessageText(state, action.text);
    default:
      return state;
  }
};

const _sendMessage = (state) => {
  if (state.newMessageText === "") return state;

  let newMessage = {
    id: 6,
    message: state.newMessageText,
  };

  let newState = JSON.parse(JSON.stringify(state));

  newState.messagesData.push(newMessage);
  newState.newMessageText = "";

  return newState;
};

const _updateMessageText = (state, text) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.newMessageText = text;
  return newState;
};

export const sendMessage = () => ({ type: SEND_MESSAGE });

export const updateMessage = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});

export default dialogsReducer;
