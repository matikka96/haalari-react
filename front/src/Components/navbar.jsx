import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark fixedTop">
            	<a href="http://localhost:3001/auth/google"><button type="button" className="btn btn-secondary">Account</button></a>
                <a className="navbar-brand" href="/">Haalarimerkkitori</a>
                <a href="http://localhost:3001/"><button type="button" className="btn btn-secondary">New Post</button></a>
            </nav>
        );  
        
    }
}
 
export default NavBar;