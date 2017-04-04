import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from './AuthService';

// <nav className="navbar navbar-default">
//   <div className="navbar-header">
//     <Link className="navbar-brand" to="/">Home</Link>
//   </div>
//   <ul className="nav navbar-nav">
//     <li>
//       <Link to="/">Cities</Link>
//     </li>
//     <li>
//       {
//        ( isLoggedIn() ) ? <Link to="/profile">Profile</Link> :  ''
//       }
//     </li>
//   </ul>
//   <ul className="nav navbar-nav navbar-right">
//     <li>
//      {
//        (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
//      }
//     </li>
//   </ul>
// </nav>

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Home</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Cities</Link>
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
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
