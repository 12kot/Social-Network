const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likesCount: 10 },
        { id: 2, message: "Hi", likesCount: 2324 },
        { id: 3, message: "How are you?", likesCount: -133 },
        { id: 4, message: "Привет", likesCount: 142 },
        { id: 5, message: "Hola", likesCount: 12 },
        { id: 6, message: "Dosvidos", likesCount: 1 },
      ],

      newPostText: "",
    },

    dialogsPage: {
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
    },
  },

  getProfilePage() {
    return this._state.profilePage;
  },

  getDialogsPage() {
    return this._state.dialogsPage;
  },

  subscribe(observer) {
    this._rerenderTree = observer;
  },

  _rerenderTree() {},

  _addPost() {
    if (this._state.profilePage.newPostText === "") return;

    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderTree(this);
  },

  _updatePostText(text) {
    this._state.profilePage.newPostText = text;
    this._rerenderTree(this);
  },

  _sendMessage() {
    if (this._state.dialogsPage.newMessageText === "") return;

    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._rerenderTree(this);
  },

  _updateMessageText(text) {
    this._state.dialogsPage.newMessageText = text;
    this._rerenderTree(this);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_POST_TEXT) {
      this._updatePostText(action.text);
    } else if (action.type === SEND_MESSAGE) {
      this._sendMessage();
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._updateMessageText(action.text);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
text: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_TEXT,
  text: text,
});
