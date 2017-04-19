import React, {Component} from 'react';
import {createPost, oneCity, deletePost, allCities, editPost} from './Util';
import {getProfile} from './AuthService'
import Auth0Lock from 'auth0-lock';
const ID_TOKEN_KEY = 'id_token';

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      city: this.props.cities.name,
      author: '',
      uniqueId: '',
      posts: this.props.posts,
      toBeUpdated: false,
      user: getProfile(),
      change: false
    }
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);

  }

  loadPostsFromServer() {
    oneCity(this.state.city).then(res => {
      this.setState({posts: res});
    });
  }

  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval)
  }

  handleDelete(id, author) {
    if (this.state.user.username !== author) {
      alert('WARNING! NOT AUTHORIZED.DONT TOUCH')
    } else {
      if (!confirm("Are You Sure You Want To Delete Post ?")) {
        // ! => don't want to do this
      } else {
        //want to do this! => maybe do something about it?
        alert('Deleting Post');
        deletePost(id);
      }
    }
  }

  handleEditSubmitForm(id, author) {
    if (this.state.user.username !== author) {
      alert('WARNING! NOT AUTHORIZED.DONT TOUCH')
    } else {
      this.setState({
        toBeUpdated: !this.state.toBeUpdated,
        uniqueId: id
      });
    }
  }

  handleEditSubmit(e) {
    confirm
    e.preventDefault();
    let id = this.state.uniqueId;
    let post = this.state;
    editPost(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated
    });

  }

  handleEditChange(e) {
    this.setState({
      content: this.refs.contentEdit.value, title: this.refs.titleEdit.value,
      // author:this.refs.usernameEdit.value,
      city: this.state.city
    });
  }

  handlePostSubmit(e) {
    e.preventDefault();
    let post = this.state;
    createPost(post)
    this.refs.content.value = '';
    this.refs.title.value = '';
  }

  handleContentChange(e) {
    this.setState({content: this.refs.content.value, title: this.refs.title.value, author: this.state.user.username, city: this.state.city});
  }

  render() {
    let posts = this.state.posts;
    let results = posts.map((post) => {
      let authorVarName = post.author
      let authorVarPic = post.authorImg
      return (
        <div className="row" key={post._id}>
          <div className="col-md-2">
            <div className="thumbnail">
              <img className="img-thumbnail" src={post.authorImg} alt="user"/>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="panel panel-default">
              <div className="panel-heading">
                <strong>{post.author}</strong>
              </div>
              <div className="panel-body">

                <ul>
                  <strong>Title: &nbsp;</strong>{post.title}</ul>
                <ul>
                  <strong>Comment: &nbsp;</strong>{post.content}</ul>
                <button className="btn btn-xs btn-primary" onClick={this.handleEditSubmitForm.bind(this, post._id, post.author)}>edit</button>
                <button className="btn btn-xs btn-danger" onClick={this.handleDelete.bind(this, post._id, post.author)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )
    });

    if (!this.state.toBeUpdated) {
      return (
        <div>
          {results}

          <div>
            <h2 className="text-center">Write a post</h2>
            <div className="container">
              <form onSubmit={this.handlePostSubmit}>
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" id="inputEmail3" ref='title' placeholder="Title" onChange={this.handleContentChange} required/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Comment</label>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" id="inputPassword3" ref='content' placeholder="Enter thoughts here" onChange={this.handleContentChange} required/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-2 col-sm-10">
                    <button type="submit" className="btn btn-success">Post</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {results}
          <div>

            <div>
              <h2 className="text-center">Edit This post</h2>
              <div className="container">
                <form onSubmit={this.handleEditSubmit}>
                  <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" id="inputEmail3" ref='titleEdit' placeholder="Edit Title" onChange={this.handleEditChange} required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Comment</label>
                    <div className="col-lg-6">
                      <input type="text" className="form-control" id="inputPassword3" ref='contentEdit' placeholder="Edit Comment" onChange={this.handleEditChange} required/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="offset-sm-2 col-sm-10">
                      <button type="submit" className="btn btn-warning">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      )
    }
  }
}
