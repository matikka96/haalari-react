import React, { Component } from "react";
import NavBar from "./navbar";

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("Profile - Constructor");
  }

  componentDidMount() {
    console.log("Profile - Mounted");
  }

  render() {
    return (
      <>
        <NavBar/>
        <div className="card mx-auto" style={{ maxWidth: 400 }}>
          <img
            src={this.props.userData.userInfo}
            alt="Avatar"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.userData.userInfo.username}</h5>
            <p className="card-text">{this.props.userData.userInfo.email}</p>
            <p className="card-text">{this.props.userData.userInfo.dateOfCreation}</p>
          </div>
          
        </div>
      </>
    );
  }
}

export default Profile;
