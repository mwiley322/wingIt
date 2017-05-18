import React, { Component } from 'react';


export default class ProfPosts extends Component {

  render() {
    let posts=this.props.posts
    console.log("THESE R PROPS," ,posts);
    let results = posts.map ((post) => {
      return (
        <div className="row" key={post.id}>
              <div className="col-xs-2">
                <h5>{post.author}</h5>
                <img src={post.authorImg} className="img-responsive" alt="user"/>
              </div>
          <br />
          <h5><strong>Title:&nbsp;{post.title}</strong></h5>
          <div className="span10">
             <h5> <strong>Comment: &nbsp;</strong>{post.content}</h5>
             <br/>
             <h5><strong>City: </strong>{post.city}</h5>
        </div>
        <hr/>
          </div>
      )
    })
    return(
      <div>
      {results}
      </div>
    )


  }

}
