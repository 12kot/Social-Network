import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  setCurrentPage,
  setFetching,
  setTotalUsersCount,
  setUsers,
  findTextChange,
} from "../../Redux/friendsReducer";
import User from "./Friend/Friend";
import axios from "axios";
import Friends from "./Friends";
import Preloader from "../Common/Preloader/Preloader";

class FriendsAPI extends React.Component {
  componentDidMount = () => {
    this.props.setFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((props) => {
        this.props.setUsers(props.data.items);
        this.props.setTotalUsersCount(props.data.totalCount);
        this.props.setFetching(false);
      });
  };

  getUsers = () => {
    return this.props.findUsers.map((friend) => {
      let followed = friend.followed
        ? "Посетить страницу"
        : "Добавить в друзья";
      return (
        <User
          id={friend.id}
          name={friend.name}
          description={friend.status}
          imgRef={friend.photos.large}
          followUser={this.props.followUser}
          followed={followed}
          key={friend.id}
        />
      );
    });
  };

  setCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setFetching(true);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`
      )
      .then((props) => {
        this.props.setUsers(props.data.items);
        this.props.setFetching(false);
      });
  };

  render = () => {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Friends
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            findTextChange={this.props.findTextChange}
            findText={this.props.findText}
            setCurrentPage={this.setCurrentPage}
            getUsers={this.getUsers}
          />
        )}
      </>
    );
  };
}

let mapStateToProps = (state) => {
  let data = state.friendsPage;
  let findUsers = [];

  if (data.findUsers.length === 0) findUsers = data.friends;
  else findUsers = data.findUsers;

  return {
    friends: data.friends,
    findText: data.findTextChange,

    totalUsersCount: data.totalUsersCount,
    pageSize: data.pageSize,
    currentPage: data.currentPage,
    isFetching: data.isFetching,
    findUsers: findUsers,
  };
};

let FriendContainer = connect(mapStateToProps, {
  findTextChange,
  followUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setFetching,
})(FriendsAPI);

export default FriendContainer;
