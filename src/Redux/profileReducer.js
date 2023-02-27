const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const profileReducer = (state, action) => {
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

  state.posts.push(newPost);
  state.newPostText = "";

  return state;
};

const _updatePostText = (state, text) => {
  state.newPostText = text;
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
text: text,
});

export default profileReducer;
