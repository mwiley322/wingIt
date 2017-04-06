import React, { Component } from 'react';
import {createPost, oneCity, deletePost, searchAllCities} from '../Util';


class Post extends Component {

  constructor(props){
    super(props)
    this.state = {
      title:'',
      content:'',
      city:'',
      author:'',
      posts:this.props.posts
    }
    this.handlePostSubmit= this.handlePostSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
  }

  loadPostsFromServer(){
    searchAllCities('').then(res => {
      this.setState({
        posts:res
      })
      console.log("working from loadpsotfromserver", this.state.posts);
    })
  }
  //   componentDidUnmount(){
  //     setInterval(0);
  //   }
  // componentDidMount(){
  //   this.loadPostsFromServer();
  //   setInterval(this.loadPostsFromServer, this.props.pollInterval)
  // }

  handleDelete(id){
    console.log("going to delete" , id);
    deletePost(id);
  }

  handlePostEdit(id){
    console.log('going to edit', id);
  }

  handlePostSubmit(e){
    e.preventDefault();
    let post = this.state;
    console.log(post,'post here ');
    createPost(post)
  }

  handleContentChange(e){
    this.setState({
      content: this.refs.content.value,
      title: this.refs.title.value,
      author:this.refs.username.value,
      city:this.refs.city.value
    })
  }
  handleCity(cityVar){
    console.log("cityvar going to handleCity fx", cityVar);
    let city = cityVar
    // this.setState({
    //   city: city
    // })
  }
  handleAuthor(){
    this.setState({
      author:'author',
      authorImg:'authorPic'
    })
  }

  componentWillReceiveProps(cityVar){
    this.setState({
      city:cityVar
    })
    return this.state.city;
    console.log(this.state.city,'<-comprecieveprops state here');
  }

  render() {
    let posts = this.props.posts
    let results = posts.map( (post) => {
    let cityVar = post.city
    let authorVarName = post.author
    let authorVarPic = post.authorImg
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
        <div className="row">
          <div className="span8">
                <p>
               <i className="icon-calendar"></i> Sept 16, 2012
              </p>
              <button onClick = {this.handlePostEdit.bind(this, post._id)}>edit</button>
              <button onClick={this.handleDelete.bind(this, post._id)}>Delete</button>
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
                ref='title' onChange={this.handleContentChange}/>
              <br/>
              <input placeholder ="Enter thoughts here" type="text"
                ref='content' onChange={this.handleContentChange}/>
                <br/>
                <input placeholder ="Enter current City" type="text"
                  ref='city' onChange={this.handleContentChange}/>
                  <br/>
                  <input placeholder ="Enter username" type="text"
                    ref='username' onChange={this.handleContentChange}/>
              <button type='submit'>Post</button>
            </form>
        </div>
        </div>
    )
  }
}

export default Post;
