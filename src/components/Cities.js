import React, { Component } from 'react';
import style from './index.css'
import {oneCity} from './Util';
import Post from './Post';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Search from './Search';



class Cities extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
      showPosts: false
    }
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
      let cities = this.props.cities
      let results = cities.map( (city) => {
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

        <button onClick={this.getCityProfile.bind(this, city._id)}>{this.state.showPosts ? 'Hide Posts' : 'Show Posts'}</button>
          {this.state.showPosts ? <Post posts = {this.state.posts} /> : null}

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
