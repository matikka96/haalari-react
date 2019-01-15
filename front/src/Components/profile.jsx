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
    return <>
        <NavBar />
        <div className="media mx-auto container m-4">
          <img src={this.props.userData.userInfo.avatar} className="mr-3" alt="avatar" />
          <div className="media-body">
            <h5 className="mt-0">{this.props.userData.userInfo.username}</h5>
            <p>
              {this.props.userData.userInfo.email}
              <br />
              {this.props.userData.userInfo.dateOfCreation}
            </p>
          </div>
        </div>
      </>;
  }
}

export default Profile;
