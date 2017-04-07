import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from './AuthService';
import style from './style';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/AllCities">Explore Cities</Link>
          </li>
          <li>
            {
             ( isLoggedIn() ) ? <Link to="/profile">Profile</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" style={style.navButton} onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" style={style.navButton} onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
