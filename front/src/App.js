import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Form from './Components/form';
import Profile from './Components/profile';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  componentDidMount(){
    console.log('App - Mounted');
    this.getToken();
  }

  state = {
    posts: [],
    userToken: ''
  };

  getToken = () => {
    let token = window.location.href.split('?token=')[1];
    console.log(token);
    
			if (token) {
				// Put the object into storage
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
        this.setState({userToken: localStorage.getItem('token')}, () => {
          this.getUserInfo();
        })
      }
      // else{
      //   this.setState({userToken: localStorage.getItem('token')}, () => {
      //     this.getUserInfo();
      //   })
      // }
  }

  getUserInfo = () => {
    axios.post("/user/profile", {token: this.state.userToken}).then(response => {
    })
  };

  

  render() {
    // console.log(this.props);
    const token = this.state.userToken;

    // const HomeRoute = ({ component: Home, ...rest}) => (
    //   <Route {...rest}render={props => (
    //     <Switch>
    //       <Home {...props}/>
    //     </Switch>

    //   )} />
    // )

    const App = () => (
      // Näin saa propsit homeen
      <>  
          <Route exact path='/' render={(routeProps) => (<Home {...routeProps} userToken={this.state.userToken}/>)} />
          <Route path='/form' render={(routeProps) => (<Form {...routeProps} userToken={this.state.userToken}/>)} />
          <Route path='/profile' component={Profile} />
          <Route path='http://localhost:3001/'/>
      </>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
