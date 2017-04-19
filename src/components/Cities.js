
import React, { Component } from 'react';
import './index.css'
import {oneCity} from './Util';
import Post from './Post';
import style from './style';

class Cities extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      showPosts: false,
      cities: []

      }
  }

  getCityProfile(name){
    oneCity(name).then(data => {
      this.setState({
        posts: data,
        showPosts: !this.state.showPosts,
      })
    })
  }

  render() {
    let cities=this.props.cities;
    let results=cities.map((city) => {
      return (
        <div className="container" id="citySearchResult">
        <div key={city._id} id='seeOneCity' className="col-md-12 ">
          <div className="thumbDiv">
             <div className="thumbnail">
                 <div className="caption-full">
                   <h2 className="cityName">{city.name}</h2>
                     <h4 className="cityPop">Population:{city.Population}</h4>
                      <img src={city.imageUrl} style={style.cityImage} alt={city.name} className="img-responsive"/>
                 </div>
                 <h6>{city.description}</h6>
                 <div className="ratings" key={city._id}>
              </div>
              <h3>Price:{city.isAffordable ? '$' : '$$$'}</h3>
              <button className="btn btn-info" onClick={this.getCityProfile.bind(this, city.name)}>{this.state.showPosts ? 'Hide Posts' : 'Show Posts'}</button>
              {this.state.showPosts ? <Post pollInterval={1000} posts={this.state.posts} cities={city}/> : null}
             </div>
             </div>
         </div>
      </div>
      )
   })
    return (
      <div className="postResults">
      {results}
      </div>
    )
 }
}

export default Cities;
