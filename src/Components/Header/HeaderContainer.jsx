import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthInfo } from "../../Redux/authReduces";

class HeaderAPI extends React.Component {
  componentDidMount = () => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        let { login, email, id } = { ...response.data.data };
        this.props.setAuthInfo(login, email, id);
      });
  };

  render = () => {
    console.log(this.props);
    return <Header login={this.props.login} />;
  };
}

let mapStateToDispatch = (state) => {
  return {
    login: state.auth.login,
    email: state.auth.email,
    userId: state.auth.userID,
  };
};

export default connect(mapStateToDispatch, { setAuthInfo })(HeaderAPI);
