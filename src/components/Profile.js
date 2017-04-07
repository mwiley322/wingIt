import React, { Component } from 'react';
import {getProfile} from './AuthService'
import {getUserPosts} from './Util';
import style from './index.css';
import ProfPosts from './ProfPosts';
import {createUser, checkForExisitingUser} from './Util.js';

export default class Profile extends Component {

    constructor(props){
      super(props)
      this.state = {
        user: getProfile(),
        edit:false,
        posts: [],
        clicked:false
      }
    }
    GetPosts(name){
      getUserPosts(name).then(data => {
        console.log('posts from db', data);
        this.setState({
          posts: data,
          clicked:!this.state.clicked
        })
        console.log("got the posts!", this.state.posts);
      })

    }
    handleUserEdit(name){
      this.setState({
        edit:!this.state.edit
      })
      console.log("we are going to edit", name, this.state.edit);
    }
    handleEditSubmit(){
      console.log(this.state._id, 'id from user')
    }
    handleEditChange(){
      console.log(this.state.idFromAuth0, 'id from auth');
    }

    handleUserDelete(name){
      console.log("we are going to delete", name);
    }

  render() {
    let user = this.state.user;
    return (
      <div className="container" id="ProfCont">
        <div className="col-md-9">
          <div className="row">
              <div className="col-md-3 pull-left">
                  <img src={user.imageUrl} className="img-responsive" alt="userImage"></img>
                  <h3>Name: {user.username}</h3>
                  <h3>About Me: {user.description}</h3>
                  <h3> Email: {user.email}</h3>
                  <h3><i>Current City: Coming soon...</i></h3>
                  <h5>Date Joined: {user.dateJoined}</h5>
                  <button type="button" className="btn btn-primary" onClick={this.handleUserEdit.bind(this, user.username)}>Edit Profile</button>
                  <br/>
                  <button type="button" className="btn btn-danger" onClick={this.handleUserDelete.bind(this, user.username)}>Delete Profile</button>
                  <button type='button' className="btn btn-info" onClick={this.GetPosts.bind(this, user.username)}>See all Posts</button>
              </div>
              <div className="col-md-12">
              {this.state.clicked ? <ProfPosts posts={this.state.posts}/> : null}
              </div>
              <div className="col-md-6 pull-right">
              </div>
              </div>
             </div>
           </div>

    );
  }
}
