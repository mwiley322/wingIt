import React, { Component } from 'react';
import Nav from './Nav.js';
import './index.css';
import Search from './Search';


class Main extends Component {
  render() {
    return (
      <div className="mainPage">
        <Nav/>
        <h1 className="homeTitle">Wing It Travel App<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span></h1>
        <Search />
      </div>
    )
  }
}


export default Main;
