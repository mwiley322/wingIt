import React, { Component } from 'react';
import Nav from './Nav.js';
import Search from './Search.js';
import './index.css';

class Main extends Component {
  render() {
    return (
    <div className="mainPage">
      <Nav/>
      <Search/>
    </div>
    )
  }
}

export default Main;
