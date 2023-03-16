const FIND_TEXT_CHANGE = "FIND_TEXT_CHANGE";
const FOLLOW = "FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FETCHING = "SET_FETCHING";

let initialState = {
  friends: [],

  findUsers: [],

  findTextChange: "",

  pageSize: 20,
  totalUsersCount: 21,
  currentPage: 2,
  isFetching: true,
};

let friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_TEXT_CHANGE:
      return _updateMessageText(action.text, initialState);
    case FOLLOW:
      return followUser(state, action.id);
    case SET_USERS:
      state.friends = action.users;
      return { ...state, friends: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case SET_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export const setTotalUsersCountAC = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount,
  };
}

const followUser = (state, id) => {
  let newState = JSON.parse(JSON.stringify(state));

  newState.friends.forEach((user) => {
    if (user.id === id) {
      user.followed = true;
      return;
    }
  });

  return newState;
};

const _updateMessageText = (text, state) => {
  if (text === "") return JSON.parse(JSON.stringify(state));

  let newState = JSON.parse(JSON.stringify(state));
  newState.findTextChange = text;
  return findUsers(newState);
};

const findUsers = (state) => {
  let newState = JSON.parse(JSON.stringify(state));
  newState.findUsers = [];

  newState.friends.forEach((user) => {
    if (user.name.toLowerCase().includes(newState.findTextChange.toLowerCase()))
      newState.findUsers.push(user);
  });

  return newState;
};

export const updateFindTextActionCreator = (text) => ({
  type: FIND_TEXT_CHANGE,
  text: text,
});

export const followAC = (id) => ({
  type: FOLLOW,
  id: id,
});

export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});

export const setFetchingAC = (isFetching) => ({
  type: SET_FETCHING,
  isFetching: isFetching,
});

export default friendsReducer;
