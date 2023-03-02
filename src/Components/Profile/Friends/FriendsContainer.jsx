import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  let data = state.friendsPage;

  return {
    friends: data.friends,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

let FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendContainer;
