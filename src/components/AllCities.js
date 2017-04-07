import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Nav from './Nav';
import style from './index.css'
import {getCities} from './Util';
import {allCities} from './Util';
// import { isLoggedIn } from './AuthService';


class AllCities extends Component {

  constructor(props){
    super(props)
    this.state = {
      cities: []
      }
  }
  // componentWillUnmount(){
  //   location.reload();
  // }
  OneCitySelect(name){
    console.log('clicked select for name', name);
    allCities(name).then(data => {
      this.setState({
        cities: data
      })
  })
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
        console.log("city is", city)
        return (
          <div key={city._id} className="col-md-9">
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
                             <button onClick={this.OneCitySelect.bind(this, city.name)}>See More</button>

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

export default AllCities;
