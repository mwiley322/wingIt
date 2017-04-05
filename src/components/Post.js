import React, { Component } from 'react';


class Post extends Component {

  render() {
    let posts=this.props.posts
    let results=posts.map((post)=>{
    return (
      <div class="container" key={post._id}>
<div class="row">
  <div class="span12">
    <div class="row">
      <div class="span8">
      </div>
    </div>
    <div class="row">
      <div class="span2">
        <a href="#" className="thumbnail">
          <div className="col-xs-2">
            <p><h5>{post.author}</h5></p>
            <img src="http://www.tutorialrepublic.com/examples/images/125x125.jpg" className="img-responsive" alt="Circular Image"/>
          </div>
        </a>
      </div>
      <h5><strong>Title:{post.title}</strong></h5>
      <div class="span10">
        <p className="postContent"></p>
          <h4>Comment</h4>
         <h5>{post.content}</h5>
        <p><a class="btn" href="#">Comment</a></p>
      </div>
    </div>
    <div class="row">
      <div class="span8">
        <p>
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
