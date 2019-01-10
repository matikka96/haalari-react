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
  }
  render() {
    // console.log(this.props);
    const App = () => (
      <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={Form} />
          <Route path='/profile' component={Profile} />
          <Route path='http://localhost:3001/'/>
        </Switch>
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
