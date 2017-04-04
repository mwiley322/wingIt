import React, { Component } from 'react';
import Nav from './Nav.js';
import Search from './Search.js';
import './index.css';
import Footer from './Footer.js';

  class App extends Component {
  render() {
    return (
    <div>
      <Nav/>
      <h1 className="homeTitle">Wing It Travel App<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span></h1>
      <Search/>
        <Footer />
    </div>
  )
  }
}
export default App;
