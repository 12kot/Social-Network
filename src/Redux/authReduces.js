const SET_AUTH_INFO = "SET_AUTH_INFO";

let initialState = {
  login: null,
  email: null,
  userId: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_INFO:
      return { ...state, ...action.data };
    default:
      return { ...state };
  }
};

export const setAuthInfo = ( login, email, userID ) => {
    return {
        type: SET_AUTH_INFO,
        data: { login, email, userID, }
    }
}

export default authReducer;
