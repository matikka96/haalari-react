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
    console.log(localStorage.getItem('token').replace('"',''))
    this.getToken();
  }

  state = {
    userToken: ''
  }

  getToken = () => {
    let token = this.props.location.search.split('?token=')[1];
    this.setState({userToken: token});
    console.log(token);
  }

  loadProfile = () => {
  	
  	// Retrieve the object from storage
		axios.post(SERVER+"/user/profile", {token: this.state.userToken}).then(response => {
      console.log(response.data);
    })
  }

	render() {
		return (
			<div>
				<NavBar />
				<div className="container">
					
				</div>
				
			</div>
		);
	}
}

export default Profile;