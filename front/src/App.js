import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Form from './Components/form';
import Profile from './Components/profile';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userToken: "",
      isLoggedIn: false
    }
  }
  
  componentDidMount(){
    console.log('App - Mounted');
    //Update token to local storage
		this.getToken();
  }
  

  getUserInfo = () => {
      axios.post("/user/profile", {token: this.state.userToken}).then(response => {
        console.log(response.data);
      })
  };
  
  state= {
    userToken: "",
    isLoggedIn: false
  }

  getToken = () => {
    let token = window.location.href.split('?token=')[1];
    console.log(token);
    
			if (token) {
				// Put the object into storage
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
        this.setState({userToken: localStorage.getItem('token')}, () => {
          console.log(this.state);
          this.getUserInfo();
        })
      }
  }

  render() {
    // console.log(this.props);
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={Form} />
          <Route path='/profile' component={Profile} />
          <Route path='http://localhost:3001/'/>
        </Switch>
      </div>
    )
    
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
