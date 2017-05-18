import React, { Component } from 'react';
import {getProfile} from './AuthService';

import {getUserPosts} from './Util';
import ProfPosts from './ProfPosts';
import { deleteUser, editUser, getUserInfo} from './Util.js';

export default class Profile extends Component {

    constructor(props){
      super(props)
      this.state = {
        user: getProfile(),
        edit:false,
        posts: [],
        clicked:false,
        imageUrl:'',
        currentCity:'',
        aboutMe:'',
        userInfo:''
      }
      // this.handleEditChange= this.handleEditChange.bind(this);
      // this.handleEditProfileSubmit = this.handleEditProfileSubmit.bind(this);
    };

  GetPosts(name) {
    getUserPosts(name).then(data => {
      console.log('posts from db', data);
      this.setState({
        posts: data,
        clicked: !this.state.clicked
      })
      console.log("we are going to edit", name, this.state.edit);
    })

    // handleEditChange(e){
    //   console.log("refs to change", this.refs.aboutMe.value)
    //   this.setState({
    //     currentCity: this.refs.currentCity.value,
    //     aboutMe: this.refs.aboutMe.value,
    //     imageUrl: this.refs.imageUrl.value
    //   });
    // }

    // handleEditProfileSubmit(e){
    //   e.preventDefault();
    //   let username = this.state.user.username
    //   let profile = this.state
    //   editUser(username,profile)
    //   console.log('prof going w it', profile);
    //   console.log('user name to be changed', username);
    //   this.setState({
    //     edit:!this.state.edit
    //     // user: getProfile()
    //   })
    // }
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
    }
  }
    componentWillMount(){
      console.log("MOUNTED- ", this.state.user.username);
      let username = this.state.user.username
        getUserInfo(username).then(data => {
          this.setState({
            userInfo: data
          })
        })
        console.log('we assigned userInfo--', this.state.userInfo);
    }


  render() {
    let userInfo = this.state.userInfo;
    console.log("Current user", userInfo)
    return (
      <div className="container" id="ProfCont">
        <div className="col-md-9">
          <div className="row">
              <div className="col-md-3 pull-left">
                  <img src={userInfo.imageUrl} className="img-responsive" alt="userImage"></img>
                  <h3>Name: {userInfo.username}</h3>
                  <h3>About Me: {userInfo.aboutMe}</h3>
                  <h3> Email: {userInfo.email}</h3>
                  <h3><i>Current City: {userInfo.currentCity}</i></h3>
                  <h5>Date Joined: {userInfo.dateJoined}</h5>
                  <button type="button" className="btn btn-primary" onClick={this.handleUserEdit.bind(this, userInfo.username)}>Edit Profile</button>
                  <br/>
                  <button type="button" className="btn btn-danger" onClick={this.handleUserDelete.bind(this, userInfo.username)}>Delete Profile</button>
                  <button type='button' className="btn btn-info" onClick={this.GetPosts.bind(this, userInfo.username)}>See all Posts</button>
              </div>
              <div className="col-md-12">
              {this.state.clicked ? <ProfPosts posts={this.state.posts}/> : null}
              {this.state.edit? <div>
                <h2>Edit This User</h2>
                <form onSubmit={this.handleEditProfileSubmit}>
                  <input placeholder="Change profile Pic" type="text" ref='imageUrl' onChange={this.handleEditChange}/>
                  <br/>
                  <input placeholder="Change about me" type="text" ref='aboutMe' onChange={this.handleEditChange}/>
                  <br/>
                  <input placeholder="Change your city" type="text" ref='currentCity' onChange={this.handleEditChange}/>
                  <br/>
                  <button className="btn btn-xs btn-success" type='submit'>Save</button>
                </form>
              </div>: null}
              </div>
              <div className="col-md-6 pull-right">
              </div>
              </div>
             </div>
           </div>


    );
  }
}
