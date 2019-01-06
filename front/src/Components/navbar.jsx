import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Haalarimerkkitori 
                    <span className="badge badge-pill badge-secondary">
                    </span>
                </a>
            </nav>
        );  
        
    }
}
 
export default NavBar;