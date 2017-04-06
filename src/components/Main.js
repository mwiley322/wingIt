import React, { Component } from 'react';
import Nav from './Nav.js';
import './index.css';
import style from '../style';
// import Footer from './Footer.js';


export default class Main extends Component {
  render() {
    return (
      <div className='col-xs-12'>
        <Nav siteName='WingIt'/>
        <h1 style={style.mainAppTitle} className="homeTitle">Wing It Travel App<span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span></h1>
      </div>
    )
  }
}
