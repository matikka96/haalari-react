import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Form from './Components/form';
import Profile from './Components/profile';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  componentDidMount(){
    console.log('App - Mounted');
    //Update token to local storage
		this.getToken();
  }
  state= {
    userToken: "",
    isLoggedIn: false
  }

  getToken = () => {
    let token = window.location.href.split('?token=')[1];
			if (token) {
        console.log("TOKEN:"+token);
				// Put the object into storage
				localStorage.setItem('token', token);
			}
			// Retrieve the object from storage
			this.setState({userToken: localStorage.getItem('token')})
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
