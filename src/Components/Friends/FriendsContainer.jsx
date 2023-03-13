import { connect } from "react-redux";
import { followAC, updateFindTextActionCreator } from "../../Redux/friendsReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  let data = state.friendsPage;
  let findUsers = [];

  if (data.findUsers.length === 0)
    findUsers = data.friends;
  else findUsers = data.findUsers;

  return {
    friends: data.friends,
    findText: data.findTextChange,
    findUsers: findUsers,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    findTextChange: (text) => {
      let action = updateFindTextActionCreator(text);
      dispatch(action);
    },
    followUser: (id) => {
      let action = followAC(id);
      dispatch(action);
    },
  };
};

let FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendContainer;
