const FIND_TEXT_CHANGE = "FIND_TEXT_CHANGE";
const FOLLOW = "FOLLOW";

let initialState = {
  friends: [
    {
      id: 1,
      followed: true,
      name: "Katya",
      description: "Kolyaa Kolyaaaa Nikolaay...",
      imgRef: `avatar`,
    },
    {
      id: 2,
      followed: true,
      name: "Evgesha programmer",
      description: "Evgesha is the best software engineer",
      imgRef: "avaEvgesha",
    },
    {
      id: 3,
      followed: true,
      name: "Nikitosha",
      description: "Nikitosha loves Engesha",
      imgRef: "avaNikita",
    },
    {
      id: 4,
      followed: false,
      name: "Nikolay",
      description: "A na more beliy pesok. Duet tepliy veter v lico..",
      imgRef: "spikeAva",
    },
    {
      id: 5,
      followed: false,
      name: "Turb0luv",
      description: "Lublu kogda volosatie muzhiki obmazivayutsa maslom..",
      imgRef: "avaDima",
    },
    {
      id: 6,
      followed: false,
      name: "No Name",
      description: "I'm Anonymous. Ha-ha-ha",
      imgRef: "avaAnonymous",
    },
    {
      id: 7,
      followed: true,
      name: "Nastya",
      description: "Nastya",
      imgRef: "avaAnonymous",
    },
  ],

  findUsers: [],

  findTextChange: "",
};

let friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_TEXT_CHANGE:
      return _updateMessageText(action.text, initialState);
    case FOLLOW:
      return followUser(state, action.id);
    default:
      return state;
  }
};

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

export default friendsReducer;
