const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello", likesCount: 10 },
    { id: 2, message: "Hi", likesCount: 2324 },
    { id: 3, message: "How are you?", likesCount: -133 },
    { id: 4, message: "Привет", likesCount: 142 },
    { id: 5, message: "Hola", likesCount: 12 },
    { id: 6, message: "Dosvidos", likesCount: 1 },
  ],

  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return _addPost(state);
    case UPDATE_POST_TEXT:
      return _updatePostText(state, action.text);
    default:
      return state;
  }
};

const _addPost = (state) => {
  if (state.newPostText === "") return state;

  let newPost = {
    id: 5,
    message: state.newPostText,
    likesCount: 0,
  };

  let newState = JSON.parse(JSON.stringify(state));

  newState.posts.push(newPost);
  newState.newPostText = "";

  return newState;
};

const _updatePostText = (state, text) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.newPostText = text;
  return newState;
};

export const addPost = () => ({ type: ADD_POST });

export const updatePost = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

export default profileReducer;
