import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="row2">
      <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar" href="#"><h4>Wing It!</h4></a>
      </div>
      <ul className="nav navbar-nav pull-right">
        <li className="active" ><a href="#">Home</a></li>
        <li><a href="./Cities">City</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </div>
  </nav>
  </div>

    );
  }
}

export default Nav;
