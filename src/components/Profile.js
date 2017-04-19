import React, {Component} from 'react';
import {getProfile} from './AuthService'
import {getUserPosts} from './Util';
import style from './index.css';
import ProfPosts from './ProfPosts';
import {createUser, checkForExisitingUser, deleteUser} from './Util.js';

export default class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: getProfile(),
      edit: false,
      posts: [],
      clicked: false
    }
  }
  GetPosts(name) {
    getUserPosts(name).then(data => {
      console.log('posts from db', data);
      this.setState({
        posts: data,
        clicked: !this.state.clicked
      })
      console.log("got the posts!", this.state.posts);
    })

  }
  handleUserEdit(name) {
    this.setState({
      edit: !this.state.edit
    })
    console.log("we are going to edit", name, this.state.edit);
  }
  handleEditSubmit() {
    console.log(this.state._id, 'id from user')
  }
  handleEditChange() {
    console.log(this.state.idFromAuth0, 'id from auth');
  }

  handleUserDelete(name) {
    if (!confirm("Are You Sure You Want To Delete Your Account ?")) {
      // ! => don't want to do this
    } else {
      //want to do this! => maybe do something about it?
      alert('Deleting Profile, GoodBye!');
      deleteUser(name);

      location.reload();

    }
  }

  render() {
    let user = this.state.user;
    return (
      <div className="container">
        <div className="row clearfix well">
          <div className="col-md-2 column">
            <img className="img-thumbnail" alt="140x140" src={user.imageUrl}/>

            <label className="custom-file">
              <input type="file" id="file" className="custom-file-input"/>
              <span className="custom-file-control"></span>

            </label>
          </div>
          <div className="col-md-8 column">

            <p>
              <h3>{user.username}</h3>
            </p>
            <em>
              <b>Email:</b>
              {user.email}/
              <b>Date Joined:</b>
              {user.dateJoined}/<b>Current City:</b>San Francisco</em>

          </div>
          <div className="col-md-2 column">

            <button type="button" className="btn btn-sm btn-primary" onClick={this.handleUserEdit.bind(this, user.username)}>Edit Profile&nbsp;&nbsp;&nbsp;&nbsp;</button>
            <br/>
            <button type="button" className="btn btn-sm btn-danger" onClick={this.handleUserDelete.bind(this, user.username)}>Delete Profile</button>
            <br/>
            <button type='button' className="btn btn-sm btn-info" onClick={this.GetPosts.bind(this, user.username)}>See all Posts&nbsp;</button>
          </div>
          <div className="col-md-9">
            {this.state.clicked
              ? <ProfPosts posts={this.state.posts}/>
              : null}
          </div>
          <div className="col-md-6 pull-right"></div>
        </div>
      </div>

    );
  }
}
