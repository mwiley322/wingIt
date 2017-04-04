import React, { Component } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Post extends Component {

  render() {
    let posts = this.props.posts
    let results = posts.map( (post) => {
    return (

      <div class="container" key={post._id}>

<div class="row">
  <div class="span12">
    <div class="row">
      <div class="span8">
        <h4><strong>{post.title}</strong></h4>
      </div>
    </div>
    <div class="row">
      <div class="span2">
        <a href="#" class="thumbnail">
            <img src="http://placehold.it/260x180" alt="" id="userPostImg" />
        </a>
      </div>
      <div class="span10">
        <p className="postContent">
         {post.content} </p>
        <p><a class="btn" href="#">Read more</a></p>
      </div>
    </div>
    <div class="row">
      <div class="span8">
        <p></p>
        <p>
          <i class="icon-user"></i> <h4>{post.author}</h4>
          | <i class="icon-calendar"></i> Sept 16th, 2012
          | <i class="icon-comment"></i> <a href="#">3 Comments</a>
          | <i class="icon-share"></i> <a href="#">39 Shares</a>
          | <i class="icon-tags"></i> Tags : <a href="#"><span class="label label-info">Snipp</span></a>
        <a href="#"><span class="label label-info">Mike</span></a>
          <a href="#"><span class="label label-info">Ode</span></a>
          <a href="#"><span class="label label-info">Broke</span></a>
                  </p>
              </div>
            </div>
        </div>
      </div>
    <br />
  <hr />
</div>
        )
      })
      return (
        <div>
      {results}
      </div>
    )
  }
}

export default Post;
