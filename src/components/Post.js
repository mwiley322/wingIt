import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Post extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:'',
      content:'',
      city:'',
      author:'',
      authorImg:''
    }
    this.handlePostSubmit= this.handlePostSubmit.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handlePostSubmit(e){
    e.preventDefault();
    let post = this.state;
    console.log(post,'post here ');
  }
  handleTitleChange(e){
    this.setState({
      title: this.refs.title.value
    })
  }
  handleContentChange(e,cityVar){
    this.setState({
      content: this.refs.content.value,
      author:'author',
      authorImg:'authorPic',
    })
  }
  handleCity(cityVar){
    console.log("cityvar going to handleCity fx", cityVar);
    let city = cityVar
    this.setState({
      city: city
    })
  }
  handleAuthor(){
    this.setState({
      author:'author',
      authorImg:'authorPic'
    })
  }

  handleDelete(id){
    console.log("going to delete" , id);
  }

  render() {
    let posts = this.props.posts
    let results = posts.map( (post) => {
    let cityVar = post.city
    let authorVarName = post.author
    let authorVarPic = post.authorImg
    console.log("here is city!!!", cityVar);
    return (

<div className="container" key={post._id}>
    <div className="span12">
    <div className="row">
      <div className="span8">
      </div>
    </div>
    <div className="row">
      <div className="span2">
        <a href="#" className="thumbnail">
          <div className="col-xs-2">
            <h5>{post.author}</h5>
            <img src={post.authorImg} className="img-responsive" alt="user"/>
          </div>
        </a>
      </div>
      <br />
      <h5><strong>Title:&nbsp;{post.title}</strong></h5>
      <div className="span10">
        <p className="postContent"></p>

         <h5> <strong>Comment: &nbsp;</strong>{post.content}</h5>
        <p><a className="btn" href="#">Comment</a></p>
      </div>
    </div>
                <button onClick ={this.handleCity(post.city)}>Edit</button>
          <button onClick={this.handleDelete(post._id)}>Delete</button>
    <div className="row">
      <div className="span8">
            <p>
          | <i className="icon-calendar"></i> Sept 16th, 2012
          </p>
        </div>
      </div>
    </div>
</div>

        )
      })
      return (
        <div>
        {results}
        <br/>
          <div>
          <h2>Write a post</h2>
            <form onSubmit={this.handlePostSubmit}>
              <input placeholder ="Title" type="text"
                ref='title' onChange={this.handleTitleChange}/>
              <br/>
              <input placeholder ="Enter thoughts here" type="text"
                ref='content' onChange={this.handleContentChange}/>
              <button type='submit'>Post</button>
            </form>
        </div>
        </div>
    )
  }
}

export default Post;
