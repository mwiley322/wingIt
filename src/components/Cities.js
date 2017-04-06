import React, { Component } from 'react';
import './index.css';
import style from '../style';
import { oneCity, findAllCities} from '../Util.js';
import Post from './Post';



export default class Cities extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: [],
      cities: [],
      showPosts: false
    }
  }

  componentWillMount() {
    findAllCities().then(data => {
      this.setState({
        cities: data,
        showPosts: !this.state.showPosts
      });
    });
  }

  getCityProfile(id){
    oneCity(id).then(data => {
      this.setState({
        posts: data,
        showPosts: !this.state.showPosts
      })
    })
  }

    render() {
      let cities=this.state.cities
      let results=cities.map((city) => {
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
              <button onClick={this.getCityProfile.bind(this, city._id)}> {this.state.showPosts ? 'Hide Posts' : 'Show Posts'}</button>
{this.state.showPosts ? <Post pollInterval={1000} posts={this.state.posts} /> : null}
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
