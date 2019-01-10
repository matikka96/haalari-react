import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark fixedTop">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        	<a href="http://localhost:3001/auth/google"><button type="button" className="btn btn-secondary">Account</button></a>
            <a className="navbar-brand" href="/">Haalarimerkkitori</a>
            <a href="/form"><button type="button" className="btn btn-secondary">New Post</button></a>
        </nav>
    );        
  }
}
 
export default NavBar;