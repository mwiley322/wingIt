import React, { Component } from 'react';
import style from './index.css'
import {getCities, allCities, oneCity } from './Util';
import Post from './Post';
import Cities from './Cities';


class AllCities extends Component {

  constructor(props){
    super(props)
    this.state = {
      city: [],
      cities: [],
      posts: [],
      }
  }

  OneCitySelect(name){
    console.log('clicked select for name', name);
    allCities(name).then(data => {
      this.setState({
        city: data
      })
  })

  oneCity(name).then(data => {
    this.setState({
      posts: data
     })
     console.log("these are the posts", this.state.posts);
   })
   window.scrollTo(0,0);
  }

  componentDidMount(){
    getCities().then(data => {
      console.log("post data is: ", data)
      this.setState({
        cities: data,
      })
    })
  }


    render() {
      let cities=this.state.cities
      let results=cities.map((city) => {
        return (
          <div key={city._id} className="col-md-9 seeAllCities">
                     <div className="thumbnail">
                         <div className="caption-full">
                           <h2 className="cityName">{city.name}</h2>
                             <h4 className="cityPop">Population:{city.Population}</h4>
                              <img src={city.imageUrl} style={style.cityImage} alt={city.name} className="img-responsive"/>
                         </div>
                         <h6>Description: {city.description}</h6>
                         <div className="ratings" key={city._id}>
                          </div>
                             <h3>Price:{city.isAffordable ? '$' : '$$$'}</h3>
                             <button id='seeMoreBtn' className="btn btn-info" onClick={this.OneCitySelect.bind(this, city.name)}>See More</button>
                         </div>
                     </div>
                  )
                })

      return (
        <div>
        <Cities cities = {this.state.city}/>
        {results}
        </div>
      )
   }
}

export default AllCities;
