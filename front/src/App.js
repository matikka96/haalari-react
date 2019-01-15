import React, { Component } from "react";
import "./App.css";
import Home from "./Components/home";
import Form from "./Components/form";
import Profile from "./Components/profile";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    userToken: "",
    userInfo: "",
    isLoggedIn: false
  };

  componentDidMount() {
    this.getToken();
  }

  getToken = () => {
    let token = window.location.href.split("?token=")[1];

    if (token) {
      // Put the object into storage
      localStorage.setItem("token", token);

      this.setState({ userToken: localStorage.getItem("token") }, () => {
        this.getUserInfo();
      });
    } else if (localStorage.getItem("token")) {
      this.setState({ userToken: localStorage.getItem("token") }, () => {
        console.log("Token setup from local storage");
        this.getUserInfo();
      });
    }
  };

  getUserInfo = () => {
    axios.post("/user/profile", { token: this.state.userToken }).then(response => {
      this.setState({ userInfo: response.data }, () => {
        this.setState({ isLoggedIn: true });
      });
    });
  };

  render() {
    const App = () => (
      // Näin saa propsit homeen
      <>
        <Route
          exact
          path="/"
          render={routeProps => <Home {...routeProps} userData={this.state} />}
        />
        <Route path="/form" render={routeProps => <Form {...routeProps} userData={this.state} />} />
        <Route
          path="/profile"
          render={routeProps => <Profile {...routeProps} userData={this.state} />}
        />
        <Route path="http://localhost:3001/" />
      </>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
