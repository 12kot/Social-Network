import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

    sidebar: {},
  },

  subscribe(observer) {
    this._rerenderTree = observer;
  },

  _rerenderTree() {},

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer(this._state.sidebar, action);

    this._rerenderTree(this);
  },
};
