import React, { Component } from "react";


class NavBar extends Component {
  state = {};
  componentDidMount() {
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ userToken: this.props.userData.userToken });
    }
  }
  logout = () => {
    localStorage.removeItem("token");
    console.log("User logged out");
    window.location.href = "/";
  };
  render() {
    return <div className="navbar-fixed">
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a className="brand-logo center" href="/">
              Merkkitori
            </a>
            {/* <a class="btn tooltipped" data-position="bottom" data-tooltip="I am a tooltip">
              Hover me!
            </a> */}
            {this.state.userToken !== "" ? <div>
                {/* <li>
                    <a className="dropdown-item" href="#" onClick={this.logout}>
                      Logout
                    </a>
                  </li> */}
                <ul className="left">
                  <li>
                    <a className="dropdown-item" href="/profile">
                      <i className="material-icons tooltipped" data-tooltip="Account">
                        account_circle
                      </i>
                    </a>
                  </li>
                </ul>
                <ul className="right">
                  <li>
                    <a href="/form">
                      <i className="material-icons tooltipped" data-tooltip="Create new post">add</i>
                    </a>
                  </li>
                </ul>
              </div> : <div>
                <li>
                  <a className="dropdown-item" href="http://localhost:3001/auth/google">
                    Login
                  </a>
                </li>
              </div>}
          </div>
        </nav>
      </div>;

  // <ul NaclassName"sidenav" id="mobile-demo">
  //   <li><a href="sass.html">Sass</a></li>
  //   <li><a href="badges.html">Components</a></li>
  //   <li><a href="collapsible.html">Javascript</a></li>
  //   <li><a href="mobile.html">Mobile</a></li>
  // </ul>)
    // <nav className="navbar sticky-top navbar-dark bg-dark fixedTop">
    //     <div className="dropdown">
    //       <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //         Account
    //       </button>
    //       <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //         {this.state.userToken !== "" ? <div>
    //             <a className="dropdown-item" href="#" onClick={this.logout}>
    //               Logout
    //             </a>
    //             <a className="dropdown-item" href="/profile">
    //               Profile
    //             </a>
    //           </div> : <div>
    //             <a className="dropdown-item" href="http://localhost:3001/auth/google">
    //               Login
    //             </a>
    //           </div>}
    //       </div>
    //     </div>
    //     <a className="navbar-brand" href="/">
    //       Haalarimerkkitori
    //     </a>
    //     <a href="/form">
    //       <button type="button" className="btn btn-secondary">
    //         New Post
    //       </button>
    //     </a>
    //   </nav>;
  }
}

export default NavBar;
