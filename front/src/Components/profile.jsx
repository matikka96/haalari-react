import React, { Component } from 'react';
import NavBar from './navbar';
import axios from "axios";
import Config from "../config";
const SERVER = Config.URL.express;

class Profile extends Component {
	
	constructor(props) {
    super(props);
    console.log("Profile - Constructor");
    
  }

  componentDidMount() {
    console.log("Profile - Mounted");
    // let token = localStorage.getItem('token');
    // if (token) {
    //   this.setState({userToken: token.replace('"','')});
    //   console.log('User loaded')
    // } else {
    //   console.log('User not logged')
    // }
  }

  state = {
    user: 'Matti'
  }

  // loadProfile = () => {
  // 	// Retrieve the object from storage
		// axios.post(SERVER+"/user/profile", {token: this.state.userToken}).then(response => {
  //     console.log(response.data);
  //   })
  // }

	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
          <p>User: {this.state.user}</p>
				</div>
			</div>
		);
	}
}

export default Profile;