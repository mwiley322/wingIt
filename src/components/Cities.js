import React, { Component } from 'react';
import style from './index.css'


class Cities extends Component {
    render() {
      let cities = this.props.cities
      let results = cities.map( (city, index) => {
        return (
          <div className="col-md-9">
                     <div className="thumbnail">
                         <div className="caption-full">
                           <h2 className="cityName">{city.name}</h2>
                             <h4 className="cityPop">Population:{city.Population}</h4>
                              <img src={city.imageUrl} style={style.cityImage} alt={city.name} classNameName="img-responsive"/>
                         </div>
                         <div className="ratings">
                          </div>
                             <h3>Affordable: ({city.isAffordable} ? $ : $$$)</h3>
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
