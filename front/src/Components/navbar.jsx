import React, { Component } from 'react';

class NavBar extends Component {
  state = {}
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({userToken: this.props.userData.userToken});
    }
  }
  logout = () => {
    localStorage.removeItem('token');
    console.log('User logged out');
    window.location.href="/";
  }
  render() {
    return <nav className="navbar sticky-top navbar-dark bg-dark fixedTop">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Account
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {(this.state.userToken !== "") ? 
            <a className="dropdown-item" href="#" onClick={this.logout}>Logout</a> : 
            <a className="dropdown-item" href="http://localhost:3001/auth/google">Login</a>}
            <a className="dropdown-item" href="/profile">Profile</a>
          </div>
        </div>
        <a className="navbar-brand" href="/">
          Haalarimerkkitori
        </a>
        <a href="/form">
          <button type="button" className="btn btn-secondary">
            New Post
          </button>
        </a>
      </nav>;        
  }
}
 
export default NavBar;