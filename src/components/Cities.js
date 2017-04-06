import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
import style from './index.css'
import {oneCity} from './Util';
import Post from './Post';
import Search from './Search'
// import { isLoggedIn } from './AuthService';

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
    console.log("this is og state in cities", this.props.cities);
    // console.log("CITYNAME STATE", this.state.cityName);
    console.log("FOUND DA NAME", this.state.cities);
    oneCity(name).then(data => {
      console.log("post data is: ", data)
      this.setState({
        posts: data,
        showPosts: !this.state.showPosts,
        // cityName:this.props.cities[0].name
      })
    })
  }

    render() {
      let cities=this.props.cities
      let results=cities.map((city) => {
        console.log("city is", city)
        return (
          <div key={city._id} className="col-md-9">
                     <div className="thumbnail">
                         <div className="caption-full">
                           <h2 className="cityName">{city.name}</h2>
                             <h4 className="cityPop">Population:{city.Population}</h4>
                              <img src={city.imageUrl} style={style.cityImage} alt={city.name} className="img-responsive"/>
                         </div>
                         <h6>Description= {city.description}</h6>
                         <div className="ratings" key={city._id}>
                          </div>
                             <h3>Price:{city.isAffordable ? '$' : '$$$'}</h3>

        <button onClick={this.getCityProfile.bind(this, city.name)}>{this.state.showPosts ? 'Hide Posts' : 'Show Posts'}</button>
          {this.state.showPosts ? <Post pollInterval={1000} posts={this.state.posts} cities={city}/> : null}
                             <p>
                                 <span className="glyphicon glyphicon-star"></span>
                                 <span className="glyphicon glyphicon-star"></span>
                                 <span className="glyphicon glyphicon-star"></span>
                                 <span className="glyphicon glyphicon-star"></span>
                                 <span className="glyphicon glyphicon-star-empty"></span>
                                 4.0 stars
                             </p>


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

export default Cities;
