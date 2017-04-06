import React, { Component } from 'react';
import style from '../style';
import SearchBrain from '../containers/SearchBrain';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../containers/AuthService';


export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <h3 style={style.navAppTitle}>{this.props.siteName}</h3>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/">Home</Link></li>
            <li><Link to="/cities">Explore</Link></li>
            <li>
            {
             (isLoggedIn()) ? ( <Link to="/profile">Profile</Link> ) : ( '' )
            }
            </li>
          </ul>
          <SearchBrain />
          <ul className="nav navbar-nav navbar-right">
            <li>
             {
               (isLoggedIn()) ?
               ( <button className="btn btn-danger log" style={ style.navButton} onClick={() => logout()}>Log out </button> )
               : ( <button className="btn btn-info log" style={ style.navButton} onClick={() => login()}>Log In</button> )
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
