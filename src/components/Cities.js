import React, { Component } from 'react';
import style from './index.css'


import {oneCity} from './Util';
import Post from './Post';


class Cities extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }
  getCityProfile(id){
    console.log(id,"id here");

    oneCity(id).then(data => {
      this.setState({
        posts: data
      })
    })
    // render(){
    //   return (
    //     <div>
    //     <Post city={this.state.clickedCity}>
    //     </div>
    //   )
    // }
  }
    render() {
      let cities = this.props.cities
      let results = cities.map( (city) => {
        return (

          <div className="col-md-9">
                     <div className="thumbnail">
                         <div className="caption-full">
                           <h2 className="cityName">{city.name}</h2>
                             <h4 className="cityPop">Population:{city.Population}</h4>
                              <img src={city.imageUrl} style={style.cityImage} alt={city.name} classNameName="img-responsive"/>
                         </div>
                         <div className="ratings" key ={city._id}>
                          
                          </div>
                             <h3>Affordable: ({city.isAffordable} ? $ : $$$)</h3>
        <button onClick={this.getCityProfile.bind(this, city._id)}>See City Profile</button>
          <Post posts = {this.state.posts}/>
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
