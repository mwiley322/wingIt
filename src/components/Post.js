import React, { Component } from 'react';
import $ from 'jquery'


class Post extends Component {

  render() {
    let posts = this.props.posts
    let results = posts.map( (post) => {
    return (
      <div className="container">
        <div className="well">
          <div className="media">
            <a className="pull-left" href="#"></a>
            <img className="media-object" src="http://i2.wp.com/avic411.com/public/style_images/master/profile/default_large.png" alt={post.author}>
              </img>
            <div className="media-body" key ={post._id}>
              <h4 className="media-heading">{post.title}</h4>
                  <p className="text-right">By {post.author}</p>
                  <p>{post.content}</p>
                <ul className="list-inline list-unstyled">
                <li><span><i className="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
                <li>|</li>
                <span><i className="glyphicon glyphicon-comment"></i> 2 comments</span>
                <li>|</li>
                <li>
              <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                  <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                  </li>
                <li>|</li>
                <li>

                <span><i className="fa fa-facebook-square"></i></span>
                <span><i className="fa fa-twitter-square"></i></span>
                <span><i className="fa fa-google-plus-square"></i></span>
                </li>
                </ul>
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
