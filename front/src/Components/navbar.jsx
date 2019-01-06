import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-light bg-light fixedTop">
                <a className="navbar-brand" href="/">Haalarimerkkitori</a>
                <a className="nav-link" href="/form">New Post<span className="sr-only">(current)</span></a>
            </nav>
        );  
        
    }
}
 
export default NavBar;