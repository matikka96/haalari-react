import React, { Component } from 'react';
import './App.css';
import Home from './Components/home';
import Form from './Components/form';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  componentDidMount(){
    console.log('App - Mounted');
  }
  render() {
    console.log(this.props);
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Form}/>
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
