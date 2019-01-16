import React, { Component } from "react";
import NavBar from "./navbar";
import M from "materialize-css";

class Profile extends Component {
  componentDidMount() {
    M.updateTextFields();
    console.log("Profile - Mounted");
  }

  render() {
    const {username, email, avatar} = this.props.userData.userInfo;
    return <>
        <NavBar />
        <div className="container section">
          <div className="profile-avatar app-center">
            <img className="circle responsive-img" src={avatar} alt="avatar" />
          </div>

          <form className="row s12 section" action="">
            <div className="input-field col s12 m6">
              <input defaultValue={username} type="text" placeholder={username} id="first_name" className="validate" />
              <label className="active" htmlFor="first_name">
                Username
              </label>
            </div>
            <div className="input-field col s12 m6">
              <input defaultValue={email} type="text" id="first_name" className="validate" />
              <label className="active" htmlFor="first_name">
                Email
              </label>
            </div>
          </form>
        </div>
        {/* <div className="media mx-auto container m-4">
          <img src={this.props.userData.userInfo.avatar} className="mr-3" alt="avatar" />
          <div className="media-body">
            <h5 className="mt-0">{this.props.userData.userInfo.username}</h5>
            <p>
              {this.props.userData.userInfo.email}
              <br />
              {this.props.userData.userInfo.dateOfCreation}
            </p>
          </div>
        </div> */}
      </>;
  }
}

export default Profile;
