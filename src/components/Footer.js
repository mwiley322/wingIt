import React, { Component } from 'react';

  class Footer extends Component {
  render() {
    return (
      <div className="row col-xs-12">
      <footer className="bg-lightgray">
        <div>
        <p>Wing It © 2017, All Rights Reserved
          <span>Web Design By: Wdi Dev Group</span></p>
            <p><a href="https://github.com/mwiley322/wingIt" target="_blank">Github<i className="fa fa-github" aria-hidden="true"></i> </a></p>
        </div>
      </footer>
      </div>
  )
  }
}

export default Footer;
