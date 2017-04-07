import React, { Component } from 'react';
import Nav from './Nav.js';
// import { Link } from 'react-router-dom';
import { isLoggedIn } from './AuthService';
// import {editPost} from './Util';
import './index.css';

class EditPost extends Component {

  // constructor(props){
  //    this.state={
  //    title:''
  //   }
  // this.handleEditSubmit= this.handleEditSubmit.bind(this);
  // this.handleEditChange= this.handleEditChange.bind(this);
  render() {
    return (
      <div className="editComment">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="title" />
          <br />
          <input type="text" className="form-control" placeholder="user name" />
          <br />
          <textarea type="text" name="textarea" className="form-control">Write comment here</textarea>
          <br />
          <button type="button">Save</button>
        </div>
      </div>
    )
  }
}

export default EditPost;
