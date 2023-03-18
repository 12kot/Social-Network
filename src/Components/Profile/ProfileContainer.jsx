import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profileReducer";
import { useParams } from "react-router-dom";

class ProfileAPI extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log(response.data);
        this.props.setUserProfile(response.data);
      });
  };

  render = () => {
    return <Profile {...this.props} />;
  };
}

let mapStateToProps = (state) => {
  let data = state.profilePage.profile;

  return {
    aboutMe: data.aboutMe,
    fullName: data.fullName,
    photos: data.photos,
  };
};

export function withRouter(Children){
  return(props)=> {

     const match  = {params: useParams()};
     return <Children {...props}  match = {match}/>
 }
}
let withRouterData = withRouter(ProfileAPI);
let ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouterData);

export default ProfileContainer;
