import React, { Component } from 'react';
import {createPost, oneCity, deletePost, allCities, editPost} from './Util';
import {getProfile} from './AuthService'
import Auth0Lock from 'auth0-lock';
const ID_TOKEN_KEY= 'id_token';

export default class Post extends Component {
  constructor(props){
    super(props)
    this.state= {
      title:'',
      content:'',
      city: this.props.cities.name,
      author:'',
      uniqueId:'',
      posts:this.props.posts,
      toBeUpdated:false,
      user: getProfile(),
      change: false,
    }
    this.handlePostSubmit= this.handlePostSubmit.bind(this);
    this.handleContentChange= this.handleContentChange.bind(this);
    this.loadPostsFromServer= this.loadPostsFromServer.bind(this);
    this.handleEditSubmit= this.handleEditSubmit.bind(this);
    this.handleEditChange= this.handleEditChange.bind(this);


  }

  loadPostsFromServer(){
    oneCity(this.state.city).then(res=> {
      this.setState({
        posts:res
      });
    });
  }

  componentDidMount(){
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  handleDelete(id,author){
    if(this.state.user.username !== author){
      alert('WARNING! NOT AUTHORIZED.DONT TOUCH')
    } else{
    deletePost(id);
  }
}

  handleEditSubmitForm(id,author){
    if(this.state.user.username !== author){
      alert('WARNING! NOT AUTHORIZED.DONT TOUCH')
    } else{
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      uniqueId:id
    });
  }
}

  handleEditSubmit(e){
    e.preventDefault();
    let id = this.state.uniqueId;
    let post = this.state;
    editPost(id,post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
    });

  }

  handleEditChange(e){
    this.setState({
      content: this.refs.contentEdit.value,
      title: this.refs.titleEdit.value,
      // author:this.refs.usernameEdit.value,
      city:this.state.city
    });
  }

  handlePostSubmit(e){
    e.preventDefault();
    let post= this.state;
    createPost(post)
    this.refs.content.value='';
    this.refs.title.value='';
  }

  handleContentChange(e){
    this.setState({
      content: this.refs.content.value,
      title: this.refs.title.value,
      author:this.state.user.username,
      city:this.state.city
    });
  }

  render() {
    let posts= this.state.posts;
    let results= posts.map( (post)=> {
      let authorVarName= post.author
      let authorVarPic= post.authorImg
      return (
        <div className="container" key={post._id}>
          <div className="span12">
            <div className="row">
              <div className="span2">
                <div className="col-xs-2">
                  <h5>{post.author}</h5>
                  <img src={post.authorImg} className="img-responsive" alt="user"/>
                </div>
              </div>
              <br />
              <h5><strong>Title:&nbsp;{post.title}</strong></h5>
              <div className="span10">
                <p className="postContent"></p>
                <h5> <strong>Comment: &nbsp;</strong>{post.content}</h5>
              </div>
            </div>
            <div className="row">
              <div className="span8">
                <p>
                  <i className="icon-calendar"></i> Sept 16, 2012
                </p>
                <button onClick={this.handleEditSubmitForm.bind(this, post._id, post.author)}>edit</button>
                <button onClick={this.handleDelete.bind(this, post._id, post.author)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
        )
      });

      if(!this.state.toBeUpdated){
        return (
          <div>
            {results}
            <br/>
            <div>
              <h2>Write a post</h2>
              <form onSubmit={this.handlePostSubmit}>
                <input placeholder="Title" type="text" ref='title' onChange={this.handleContentChange}/>
                <br/>
                <input placeholder="Enter thoughts here" type="text" ref='content' onChange={this.handleContentChange}/>
                <button type='submit'>Post</button>
              </form>
            </div>
          </div>
          )
        } else {
          return (
            <div>
              {results}
              <div>
                <h2>Edit This post</h2>
                <form onSubmit={this.handleEditSubmit}>
                  <input placeholder="Title" type="text" ref='titleEdit' onChange={this.handleEditChange}/>
                  <br/>
                  <input placeholder="Enter thoughts here" type="text" ref='contentEdit' onChange={this.handleEditChange}/>
                  <button type='submit'>Save</button>
                </form>
              </div>
            </div>
            )
          }
        }
      }
