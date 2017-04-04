import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Post extends Component {

  render() {
    let posts = this.props.posts
    let results = posts.map( (post) => {
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
            <img src="http://www.tutorialrepublic.com/examples/images/125x125.jpg" className="img-responsive" alt="user"/>
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
          | <i className="icon-calendar"></i> &nbsp;Sept 16th, 2012
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
      </div>
    )
  }
}

export default Post;
