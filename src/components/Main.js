import React, { Component } from 'react';
import mainPhoto from './mainPhoto.jpg'; // relative path to image
import Nav from './Nav.js';
import Search from './Search.js';
import style from './index.css';

class Main extends Component {
    render() {
        return (
        <div className="mainPage">
          <Nav/>
          <Search/>
            <img src={mainPhoto} width="1365px" height="600px" alt={"main"} className="photo1"/>

            </div>
        )
    }
}

export default Main;
